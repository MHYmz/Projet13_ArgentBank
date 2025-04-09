import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.main`
  background-color: #f5f7fa;
  padding: 30px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const FormSection = styled.section`
  background-color: white;
  width: 270px;
  margin: 3rem auto;
  padding: 2rem;
  box-sizing: border-box;
  @media (min-width: 520px) {
    width: 320px;
  }
`;

export const UserIcon = styled.i`
  font-size: 3rem;
  display: block;
  text-align: center;
  margin-bottom: 1rem;
`;

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const FieldLabel = styled.label`
  font-weight: bold;
`;

export const FieldInput = styled.input`
  padding: 5px;
  font-size: 1.2rem;
`;

export const RememberContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const RememberLabel = styled.label`
  margin-left: 0.5rem;
  font-weight: normal;
`;

export const SubmitBtn = styled.button`
  display: block;
  width: 100%;
  padding: 8px;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 1rem;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    transform: scale(1.03);
    background-color: #0056b3;
  }
`;

export const ErrorText = styled.p`
  color: red;
  font-weight: bold;
  margin-top: 1rem;
`;

export const NavContainer = styled.nav`
  padding: 1rem;
`;

export const NavLogoLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
`;

export const LogoImage = styled.img`
  height: 40px;
`;
