import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext"; // Import your auth context
import App from "./App";

const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  return currentUser ? <App /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
