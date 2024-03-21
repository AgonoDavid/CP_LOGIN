import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Navbar from "./component/navbar";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [focusedEmail, setFocusedEmail] = useState(false);
  const [email, setEmail] = useState("");

  const handleFocusPassword = () => {
    setFocusedPassword(true);
  };

  const handleBlurPassword = () => {
    if (!password) {
      setFocusedPassword(false);
    }
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
    if (!focusedPassword && e.target.value) {
      setFocusedPassword(true);
    }
  };

  const handleFocusEmail = () => {
    setFocusedEmail(true);
  };

  const handleBlurEmail = () => {
    if (!email) {
      setFocusedEmail(false);
    }
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
    if (!focusedEmail && e.target.value) {
      setFocusedEmail(true);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col lg:justify-center items-center h-screen">
      <Navbar />
      <div className="flex flex-col justify-center items-center w-1/2 mb-[40px]  lg:mt-0 md:mt-28 mt-[46px]">
        <img
          src={logo}
          className=" lg:w-[30%] w-[50%] mx-auto lg:block hidden"
        />
      </div>
      <p className="text-center font-[900] lg:text-[48px] text-[32px] font-figtree">
        Welcome back!
      </p>
      <div className="relative">
        <div className="lg:w-[496px] w-[300px] mt-[28px] mb-[24px] relative">
          <label
            className={`absolute left-[16px] transition-all duration-300 text-[#787878] ${
              focusedEmail || email ? "top-[20%] text-xs" : "top-[50%] text-sm"
            } transform ${
              focusedEmail || email ? "-translate-y-2" : "-translate-y-1/2"
            } text-black pointer-events-none`}
          >
            Email address*
          </label>
          <input
            type="text"
            className="w-full h-[48px] px-[16px] text-[16px] pt-1 border-[1px] border-solid border-[#D7D7D7] rounded-[4px] transition-all duration-300 font-[400] font-lato"
            onFocus={handleFocusEmail}
            onBlur={handleBlurEmail}
            onChange={handleChangeEmail}
          />
        </div>
      </div>
      <div className="font-lato relative">
        <div>
          <label
            className={`absolute left-[16px] transition-all duration-300 text-[#787878] ${
              focusedPassword || password
                ? "top-[10%] text-xs"
                : "top-[30%] text-sm"
            } transform ${
              focusedPassword || password
                ? "-translate-y-2"
                : "-translate-y-1/2"
            } text-black pointer-events-none`}
          >
            Password*
          </label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder=""
            className="border border-solid border-[#D7D7D7] lg:w-[496px] w-[300px] h-[48px] rounded-[4px] px-[16px] pr-[48px] text-[16px] font-[400] font-lato"
            onFocus={handleFocusPassword}
            onBlur={handleBlurPassword}
            onChange={handleChangePassword}
          />

          <button
            className="absolute top-[30%] transform -translate-y-1/2 right-0 flex items-center px-2 focus:outline-none"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? (
              <FaEye color="#9B9B9B" />
            ) : (
              <FaEyeSlash color="#9B9B9B" />
            )}
          </button>
        </div>
        <div className="my-[16px]">
          <p className="text-sm text-gray-500 float-right">
            <a href="#" className="text-black font-lato font-bold">
              Forgot Password?
            </a>
          </p>
        </div>
      </div>

      <div>
        <button className="bg-[#E1083C] lg:w-[496px] w-[300px] h-[48px] rounded-[4px] mt-[48px] font-lato text-white text-[16px] hover:bg-[#e1083b9a] hover:shadow-md">
          Login
        </button>
      </div>
      <div className=" font-lato text-[16px] mt-[14px] py-[12px]">
        Don't have an account? <span className=" font-bold">Sign Up</span>
      </div>
    </div>
  );
};

export default Login;
