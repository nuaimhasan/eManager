import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";

export default function AdminRoute({ children }) {
  const location = useLocation();
  const token = localStorage.getItem("eManager_jwt");

  if (!token) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (token) {
    return children;
  }

  return <Spinner />;
}
