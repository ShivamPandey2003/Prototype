import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type option = {
  optionId: number,
  optionText: string
}

type MsgType = {
  message: string;
  Action: string;
  option: option[];
  selectedOption: number[]
};

type HomeState = {
  address: string;
  date: string;
  "/create": MsgType[];
  "/create/presenting-comparable":MsgType[]
  "/create/recommended-offer":MsgType[]
  "/create/analyzing-current-market":MsgType[]
  "/create/property-condition":MsgType[]
  "/create/personalizing-the-offer":MsgType[]
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Month is zero-based
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const defaultState: HomeState = {
  address: "",
  date: formatDate(new Date().toISOString()),
  "/create": [],
  "/create/presenting-comparable":[],
  "/create/recommended-offer":[],
  "/create/analyzing-current-market":[],
  "/create/property-condition":[],
  "/create/personalizing-the-offer":[],
};

const loadStateFromLocalStorage = (): HomeState => {
  try {
    const serializedState = localStorage.getItem("homeState");
    if (serializedState === null) {
      return defaultState;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Error loading from localStorage:", err);
    return defaultState;
  }
};

const initialState: HomeState = loadStateFromLocalStorage();

const saveStateToLocalStorage = (state: HomeState) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("homeState", serializedState);
  } catch (err) {
    console.error("Error saving to localStorage:", err);
  }
};

export const homeSlice = createSlice({
    name: '/create',
    initialState,
    reducers: {
      setAddress: (state, action: PayloadAction<string>) => {
        state.address = action.payload;
        saveStateToLocalStorage(state);
      },
      setMsg: (state:any, action: PayloadAction<{data:MsgType[], location: string}>) => {
        state[action.payload.location] = [...action.payload.data];
        saveStateToLocalStorage(state);
      },
      resetAndLoadFromStorage: () => {
        localStorage.clear();
        return defaultState;
      }
    }
  });

export const { setAddress, setMsg, resetAndLoadFromStorage } = homeSlice.actions;
export default homeSlice.reducer;