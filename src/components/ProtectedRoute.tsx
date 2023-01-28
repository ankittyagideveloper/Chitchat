import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
  const { userName, userEmail, phoneNumber, profileImage } = useSelector(
    (state) => state && state.userInfo
  );
  const auth = userName && userEmail ? true : false;
  if (!auth) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
