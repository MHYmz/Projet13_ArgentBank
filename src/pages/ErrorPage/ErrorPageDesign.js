import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const ErrorContainer = styled.div`
  text-align: center;
  @media screen and (max-width: 400px) {
    margin-top: 200px;
  }
`;

export const ErrorStatus = styled.h1`
  color: #e63946;
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 10rem;
  margin-top: 60px;
  @media screen and (max-width: 750px) {
    font-size: 7rem;
  }
  @media screen and (max-width: 400px) {
    font-size: 5rem;
  }
`;

export const ErrorMessage = styled.p`
  color: #e63946;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 1.7rem;
  line-height: 1.6;
  margin: 40px 0 60px;
  text-align: center;

  @media screen and (max-width: 750px) {
    font-size: 1.4rem;
  }

  @media screen and (max-width: 400px) {
    font-size: 1rem;
  }
`;


export const ErrorLink = styled(NavLink)`
  color:rgb(4, 209, 134);
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  text-decoration: none;
  border: 2px solid rgb(0, 83, 35);
  padding: 10px 20px;
  border-radius: 6px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #e63946;
    color: #ffffff;
  }

  @media (max-width: 400px) {
    font-size: 0.95rem;
    padding: 8px 16px;
  }
`;



