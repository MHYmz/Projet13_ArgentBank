import React from "react";
import ExitButton from "../ExitButton/ExitButton.jsx"
import { 
  WrapperNav, 
  StyledLink, 
  ItemNav, 
  BrandImage, 
  UserAction,
  LoginAction,
} from "./NavigatorBarDesign.js";
import { FaUserCircle } from "react-icons/fa";

const NavigatorBar = () => {
  const isAuthenticated = localStorage.getItem("jwtToken") !== null;

  const logoSrc = `${import.meta.env.VITE_PUBLIC_URL}/img/argentBankLogo.png`;
      
  return (
    <WrapperNav>
      <StyledLink to="/">
        <BrandImage src={logoSrc} alt="ArgentBank Logo" />  
      </StyledLink>

      <ItemNav>
      {isAuthenticated && (
        <StyledLink to="/dashboard" title="Accéder au profil utilisateur">
          <LoginAction>
            <FaUserCircle />
          </LoginAction>
        </StyledLink>
      )}

        {isAuthenticated ? (
          <ExitButton />
        ) : ( 
          <StyledLink to={isAuthenticated ? "/dashboard" : "/connect"}>
            <UserAction>
              <FaUserCircle />
              Log In
            </UserAction>
          </StyledLink>
        )}
      </ItemNav>
    </WrapperNav>
  )
}

export default NavigatorBar;
