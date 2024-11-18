// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  if (!currentUser) {
    return location.pathname === "/register" ? <Navigate to="/register" /> : <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;