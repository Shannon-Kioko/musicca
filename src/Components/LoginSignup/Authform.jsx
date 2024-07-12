import React, { useEffect, useState } from "react";
import email_icon from "../Assets/email.png";
import user_icon from "../Assets/user.png";
import password_icon from "../Assets/padlock.png";
import back from "../Assets/back.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const AuthForm = ({ action, forgotPassword }) => {
  // local state management with useState
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // form state management with react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Submit");
    alert(JSON.stringify(data));
    console.log( "cvals",getValues())
    console.log(data)
    };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        userName: "",
        email: "",
        password: "",
      });
    }
  }, [isSubmitSuccessful, reset]);
  const handleForgotPassword = () => {
    console.log("Forgot Password");
  };

  const handleBack = () => {
    navigate(-1);
  };

  console.log({ action });

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
          {action === "Login" ? (
            <div></div>
          ) : (
            <>
              <div className="input">
                <img src={user_icon} className="icon" alt="User Icon" />
                <input
                  aria-invalid={errors.userName ? "true" : "false"}
                  {...register("userName", { minLength: 2, required: true })}
                  // defaultValue prop by react-hook-form binds state to the form inputs
                  defaultValue={userName}
                  type="text"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              {errors.password && (
                <span className="errors">{errors.password.message}</span>
              )}
              {console.log(errors)}
            </>
          )}

          <div className="input">
            <img src={email_icon} className="icon" alt="Email Icon" />
            <input
              {...register("email", { minLength: 2, required: true })}
              defaultValue={email}
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input">
            <img src={password_icon} className="icon" alt="Password icon" />

            <input
              {...register("password", {
                minLength: {
                  value: 4,
                  message: "Must have at least 4 characters",
                },
                required: "You must enter password",
              })}
              defaultValue={password}
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

          <div
            className="submit-container submit"
            onClick={handleSubmit(onSubmit)}
          >
            {action === "Sign Up" ? "Sign Up" : "Log In"}
          </div>
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
