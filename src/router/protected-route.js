import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isUserLogin = useSelector((state) => state.auth.isUserLogin);

  if (!isUserLogin) return <Navigate to="/auth" />;

  return children;
};

export default ProtectedRoute;
