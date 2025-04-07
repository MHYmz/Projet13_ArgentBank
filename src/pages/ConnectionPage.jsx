import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import FooterSection from "../components/FooterSection";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser, getUserProfile } from "../store/authenticationSlice";

function SignUpPage() {
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
      <nav className="navigation">
        <Link className="navigation-logo" to="/">
          <img className="navigation-logo-image" src="./img/argentBankLogo.png" alt="Company Logo" />
          <h1 className="sr-only">Company Name</h1>
        </Link>
      </nav>

      <main className="main-content bg-dark">
        <section className="sign-in-section">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Log In</h1>
          <form onSubmit={handleFormSubmit}>
            <div className="input-group">
              <label htmlFor="user-email">Email Address</label>
              <input 
              type="email" 
              id="user-email" 
              value={email} 
              onChange={handleEmailInputChange}
              autoComplete="username" />
            </div>
            <div className="input-group">
              <label htmlFor="user-password">Password</label>
              <input 
              type="password" 
              id="user-password" 
              value={password} 
              onChange={handlePasswordInputChange} 
              autoComplete="current-password"
              />
            </div>
            <div className="remember-me-option">
              <input type="checkbox" id="remember-user" />
              <label htmlFor="remember-user">Remember me</label>
            </div>
            <button className="submit-btn" type="submit"> Log In </button>
            {error && <p className="error-message">{error}</p>}
          </form>
        </section>
      </main>

     <FooterSection/>
    </>
  );
}

export default SignUpPage;
