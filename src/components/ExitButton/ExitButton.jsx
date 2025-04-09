import React from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/authenticationSlice";
import { useNavigate } from "react-router";
import { StyledLink} from "../NavigatorBar/NavigatorBarDesign"

const ExitButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleLogout = () => {
    dispatch(logoutUser());
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <StyledLink to="/"
     onClick={handleLogout}
     style= {{ color: "#333"}}
     onMouseEnter={(e) => e.target.style.color= "#00bc77"}
     onMouseLeave={(e) => e.target.style.color= "#333"}>
      <i className="fa fa-sign-out"></i>
      Log Out
    </StyledLink>
  );
};

export default ExitButton;
