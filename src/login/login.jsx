import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col justify-center items-center w-1/2 mb-[40px]">
        <img src={logo} className=" w-[30%] mx-auto" />
      </div>
      <p className=" text-center font-[900] text-[48px] font-figtree">
        Welcome back!
      </p>
      <div>
        <input
          type="text"
          placeholder="Email address"
          className="border border-solid border-[#D7D7D7] w-[496px] h-[48px] rounded-[4px] px-[16px] pr-[48px] mt-[28px] mb-[24px]"
        />
      </div>
      <div className="font-lato relative">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="border border-solid border-[#D7D7D7] w-[496px] h-[48px] rounded-[4px] px-[16px] pr-[48px]"
        />

        <button
          className="absolute inset-y-0 right-0 flex items-center px-2 focus:outline-none"
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
        <p className="text-sm text-gray-500">
          <a href="#" className=" text-black font-lato font-bold">
            Forgot Password?
          </a>
        </p>
      </div>
      <div>
        <button className=" bg-[#E1083C] w-[496px] h-[48px] rounded-[4px] mt-[48px] font-lato text-white text-[16px] hover:bg-[#e1083b9a] hover:shadow-md">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
