import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../store/authenticationSlice";
import { Link, useNavigate } from "react-router";

const ExitButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <Link className="main-nav-item" to="/" onClick={handleLogout}>
      <i className="fa fa-sign-out-alt"></i>
      Log Out
    </Link>
  );
};

export default ExitButton;
