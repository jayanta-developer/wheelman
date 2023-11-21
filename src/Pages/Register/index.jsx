import React, { useState } from "react";
import "./style.css";

import googleicon from "../../Assets/images/google-icon.png";
import nameicon from "../../Assets/images/name-icon.svg";
import emailicon from "../../Assets/images/email-icon.svg";
import passwordicon from "../../Assets/images/password.svg";
import registerbg from "../../Assets/images/register-bg.jpg";


export default function Register() {
  return (
    <>
      <div className="register-page">
        <div className="register-box">
          <h1>Register Now</h1>
          <div className="google-icon">
            <a href="#">
              <img src={googleicon} alt="" />
              <h4>Continue with Google</h4>
            </a>
          </div>
          <div className="orw-row"> or </div>
          <div className="register-row">
            <label>Full Name</label>
            <input type="text" placeholder="Saimon Jhonson" />
            <span>
              <img src={nameicon} alt="" />
            </span>
          </div>
          <div className="register-row">
            <label>Email Address</label>
            <input type="text" placeholder="jhon.horald@gmail.com" />
            <span>
              <img src={emailicon} alt="" />
            </span>
          </div>
          <div className="register-row">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
            <span>
              <img src={passwordicon} alt="" />
            </span>
          </div>
          <div className="register-row padding0">
            <label>Confirm Password</label>
            <input type="password" placeholder="Enter your password" />
            <span>
              <img src={passwordicon} alt="" />
            </span>
          </div>
          <div className="terms-conditions">
            <p className="">
              By clicking Register you agree to{" "}
              <a href="#">Terms &amp; Conditions</a>
            </p>
          </div>
          <div className="btn-register-row">
            <button className="btn-register">Register</button>
          </div>
          <h3 className="terms-conditions">
            Already have an account? <a href="#">Login Now</a>
          </h3>
        </div>
      </div>
    </>
  );
}
