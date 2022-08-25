import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../context/context";
import { useContext } from "react";

export const ProtectedRoute = () => {
  const { isAuth } = useContext(AuthContext);
  console.log(isAuth);
  if (isAuth) {
    return <Outlet />;
  }
  return <Navigate to="/login" />;
};
