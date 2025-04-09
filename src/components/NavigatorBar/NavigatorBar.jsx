import React from "react";
import ExitButton from "../ExitButton/ExitButton.jsx"
import { 
  WrapperNav, 
  StyledLink, 
  ItemNav, 
  BrandImage, 
  UserAction 
} from "./NavigatorBarDesign.js";

const NavigatorBar = () => {
  const isAuthenticated = localStorage.getItem("jwtToken") !== null;

  const logoSrc = `${import.meta.env.VITE_PUBLIC_URL}/img/argentBankLogo.png`;
      
  return (
    <WrapperNav>
      <StyledLink to="/">
        <BrandImage src={logoSrc} alt="ArgentBank Logo" />  
      </StyledLink>
      <ItemNav>
        {isAuthenticated ? (
          <ExitButton />
        ) : ( 
          <StyledLink to={isAuthenticated ? "/dashboard" : "/connect"}>
            <UserAction>
              <i className="fa fa-user-circle"></i>
              Log In
            </UserAction>
          </StyledLink>
        )}
      </ItemNav>
    </WrapperNav>
  )
}

export default NavigatorBar;
