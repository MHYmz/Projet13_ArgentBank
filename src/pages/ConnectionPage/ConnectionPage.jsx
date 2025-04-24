import React, { useState, useEffect } from "react";
import { useNavigate} from "react-router-dom";
import FooterSection from "../../components/FooterSection/FooterSection";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, getUserProfile } from "../../store/authenticationSlice";
import NavigatorBar from "../../components/NavigatorBar/NavigatorBar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
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
  ShowPasswordIcon,
} from "./ConnectionPageDesign.js"

function ConnectionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch ();
  const error = useSelector((state) => state.authentication.loginError)

  useEffect(() => {
  }, []);


  const handleEmailInputChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
  
    const savedPassword = localStorage.getItem(`rememberedPassword_${newEmail}`);
    if (savedPassword) {
      setPassword(savedPassword);
      setRememberMe(true);
    } else {
      setPassword("");
      setRememberMe(false);
    }
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

      if (rememberMe) {
        localStorage.setItem(`rememberedPassword_${email}`, password);
        localStorage.setItem("rememberMe", "true");
      } else {
        localStorage.removeItem(`rememberedPassword_${email}`);
        localStorage.removeItem("rememberMe");
      }

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
              autoComplete="username" 
              />
              </FieldGroup>
            <FieldGroup>
              <FieldLabel htmlFor="user-password">Password</FieldLabel>
              <FieldInput
              type={showPassword ? "text" : "password"}
              id="user-password" 
              value={password} 
              onChange={handlePasswordInputChange} 
              autoComplete="current-password"
              />
              <ShowPasswordIcon 
                onClick={() => setShowPassword(!showPassword)}
                show={showPassword}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye /> }
                  </ShowPasswordIcon>
            </FieldGroup>
            <RememberContainer>
              <input 
                type="checkbox" 
                id="remember-user" 
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                />
              <RememberLabel htmlFor="remember-user">Remember me</RememberLabel>
            </RememberContainer>
            <SubmitBtn className="submit-btn" type="submit"> 
              Log In 
              </SubmitBtn>
            {error && <ErrorText>{error}</ErrorText>}
          </form>
        </FormSection>
      </Container>
     <FooterSection/>
    </>
  );
}

export default ConnectionPage;
