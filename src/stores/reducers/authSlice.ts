import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
  isAuthenticated: boolean;
  user: FormData | null;
}

const initialState: AuthState = {
  isAuthenticated: !!sessionStorage.getItem("auth"),
  user: sessionStorage.getItem("auth") ? JSON.parse(sessionStorage.getItem("auth")!) : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      sessionStorage.setItem("auth", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      sessionStorage.removeItem("auth");
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
