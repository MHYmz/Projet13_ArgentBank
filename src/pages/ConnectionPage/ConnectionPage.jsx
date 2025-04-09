import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import FooterSection from "../../components/FooterSection/FooterSection";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, getUserProfile } from "../../store/authenticationSlice";
import NavigatorBar from "../../components/NavigatorBar/NavigatorBar";
import {
  Container, 
  FormSection,
  UserIcon,
  FieldGroup,
  FieldLabel,
  FieldInput,
  RememberContainer,
  RememberLabel,
  SubmitBtn,
  ErrorText,
} from "./ConnectionPageDesign.js"

function ConnectionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const navigate = useNavigate();
  const dispatch = useDispatch ();
  const error = useSelector((state) => state.authentication.loginError)


  const handleEmailInputChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const token = await dispatch(authenticateUser({email, password})).unwrap();
      localStorage.setItem("jwtToken", token);
      await dispatch(getUserProfile(token)).unwrap();
      navigate("/dashboard");
    } catch (error) {
    console.error(error);
    }
  };

  return (
    <>
     <NavigatorBar />

      <Container>
        <FormSection>
          <UserIcon className="fa fa-user-circle sign-in-icon"/>
          <h1>Log In</h1>
          <form onSubmit={handleFormSubmit}>
            <FieldGroup>
              <FieldLabel htmlFor="user-email">Email Address</FieldLabel>
              <FieldInput
              type="email" 
              id="user-email" 
              value={email} 
              onChange={handleEmailInputChange}
              autoComplete="username" />
              </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="user-password">Password</FieldLabel>
              <FieldInput
              type="password" 
              id="user-password" 
              value={password} 
              onChange={handlePasswordInputChange} 
              autoComplete="current-password"
              />
            </FieldGroup>
            <RememberContainer>
              <input type="checkbox" id="remember-user" />
              <RememberLabel htmlFor="remember-user">Remember me</RememberLabel>
            </RememberContainer>
            <SubmitBtn className="submit-btn" type="submit"> Log In </SubmitBtn>
            {error && <ErrorText>{error}</ErrorText>}
          </form>
        </FormSection>
      </Container>

     <FooterSection/>
    </>
  );
}

export default ConnectionPage;
