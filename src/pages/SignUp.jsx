import React, { useState } from "react";
import {Link} from "react-router-dom";

function SignUpPage() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState(null);

  const handleEmailInputChange = (event) => {
    setUserEmail(event.target.value);
  };

  const handlePasswordInputChange = (event) => {
    setUserPassword(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (userEmail === "test@example.com" && userPassword === "password123") {
      localStorage.setItem("authToken", "fake-jwt-token");
      alert("Login successful!");
    } else {
      setLoginError("Invalid email or password");
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
              <input type="email" id="user-email" value={userEmail} onChange={handleEmailInputChange} />
            </div>
            <div className="input-group">
              <label htmlFor="user-password">Password</label>
              <input type="password" id="user-password" value={userPassword} onChange={handlePasswordInputChange} />
            </div>
            <div className="remember-me-option">
              <input type="checkbox" id="remember-user" />
              <label htmlFor="remember-user">Remember me</label>
            </div>
            <button className="submit-btn" type="submit">
              Log In
            </button>
            {loginError && <p className="error-message">{loginError}</p>}
          </form>
        </section>
      </main>

      <footer className="footer">
        <p className="footer-text">© 2023 Company Name</p>
      </footer>
    </>
  );
}

export default SignUpPage;
