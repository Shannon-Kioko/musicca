import React, { useState } from "react";
import email_icon from "../Assets/email.png";
import user_icon from "../Assets/user.png";
import password_icon from "../Assets/padlock.png";
import { Link } from "react-router-dom";

const AuthForm = ({ action, forgotPassword }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log("Submit");
  };

  const handleForgotPassword = () => {
    console.log("Forgot Password");
  };

  console.log({ action });

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      <form>
        <div className="inputs">
          {action === "Login" ? (
            <div></div>
          ) : (
            <div className="input">
              <img src={user_icon} className="icon" alt="User Icon" />
              <input
                type="text"
                placeholder="Username"
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
          )}

          <div className="input">
            <img src={email_icon} className="icon" alt="Email Icon" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} className="icon" alt="Password icon" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        {action === "Sign Up" ? (
          <div></div>
        ) : (
          <div className="forgot-password">
            Lost Password?{" "}
            <span onClick={handleForgotPassword}>Click Here!</span>{" "}
          </div>
        )}
        <div className="submit-container">
          {action === "Login" && (
            <div className="create-account forgot-password">
              Don't have an account?{" "}
              <span>
                <Link to="/signup">Create one</Link>
              </span>
            </div>
          )}

          <div className="submit-container submit" onClick={handleSubmit}>
            {action === "Sign Up" ? "Sign Up" : "Log In"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
