import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authenticationSlice";

import { StyledLink} from "../NavigatorBar/NavigatorBarDesign"
import { FaSignOutAlt } from "react-icons/fa";

const ExitButton = () => {
  const dispatch = useDispatch();

  
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    window.location.reload();
  };

  return (
    <StyledLink
  to="/"
  onClick={handleLogout}
  style={{ display: "flex", alignItems: "center", gap: "6px", color: "#333" }}
  onMouseEnter={(e) => {
    e.currentTarget.style.color = "#00bc77";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.color = "#333";
  }}
>
  <FaSignOutAlt />
  Log Out
</StyledLink>

  );
};

export default ExitButton;
