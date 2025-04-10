import React from "react";
import {
  ErrorContainer,
  ErrorStatus,
  ErrorMessage,
  ErrorLink
} from "./ErrorPageDesign.js";
import NavigationBar from "../../components/NavigatorBar/NavigatorBar.jsx";

const ErrorPage = () => {
  return (
    <div>
      <NavigationBar />
      <ErrorContainer>
        <ErrorStatus>404</ErrorStatus>
        <ErrorMessage> Erreur ! Cette page n’existe pas </ErrorMessage>
        <ErrorLink to="/">RETOUR À L'ACCEUIL</ErrorLink>
      </ErrorContainer>
    </div>
  );
};

export default ErrorPage;
