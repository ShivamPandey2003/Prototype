// src/routes/ProtectedRoute.tsx
import { Navigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../stores/store";
import { JSX } from "react";

interface ProtectedRouteProps {
  element: JSX.Element;
}

// Protect routes based on Redux state
const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  return isAuthenticated ? element : <Navigate to="/auth" replace />;
};

export default ProtectedRoute;
