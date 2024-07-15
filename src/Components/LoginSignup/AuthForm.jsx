import React, { useEffect, useState } from "react";
import email_icon from "../Assets/email.png";
import user_icon from "../Assets/user.png";
import password_icon from "../Assets/padlock.png";
import back from "../Assets/back.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { object, string, } from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

const AuthForm = ({ action, forgotPassword }) => {
  const navigate = useNavigate();

  const userSchema = object().shape({
    userName: action ==="Sign Up" ? string().required("Username is required").min(3, "Username must be at least 3 characters") : string(),
    email: string().email("Enter a valid email address").required("Email is required!"),
    password: string().required("Password is required!").min(4, "Password must be at least 4 characters").max(6, "Password must be at most 6 characters"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(userSchema),
  });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const handleForgotPassword = () => {
    console.log("Forgot Password");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>

      {action === "Sign Up" && (
        <div className="back-button" onClick={handleBack}>
          <img src={back} className="back" alt="back button" />
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          {action !== "Login" && (
            <>
              <div className="input">
                <img src={user_icon} className="icon" alt="User Icon" />
                <input
                  {...register("userName")}
                  type="text"
                  placeholder="Username"
                />
              </div>
              {errors.userName && (
                <span className="errors">{errors.userName.message}</span>
              )}
            </>
          )}

          <div className="input">
            <img src={email_icon} className="icon" alt="Email Icon" />
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
            />
          </div>
          {errors.email && (
            <span className="errors">{errors.email.message}</span>
          )}

          <div className="input">
            <img src={password_icon} className="icon" alt="Password Icon" />
            <input
              {...register("password")}
              type="password"
              placeholder="Password"
            />
          </div>
          {errors.password && (
            <span className="errors">{errors.password.message}</span>
          )}
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

          <div className="submit-container submit">
            <button type="submit">{action === "Sign Up" ? "Sign Up" : "Log In"}</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
