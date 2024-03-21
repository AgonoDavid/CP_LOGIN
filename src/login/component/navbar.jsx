import React from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="lg:hidden w-full bg-white py-4 fixed top-0 z-50 border-b border-[#D7D7D7]">
      <nav className="flex justify-center items-center px-4">
        <img src={logo} className="w-[25%]" alt="Logo" />
      </nav>
    </div>
  );
};

export default Navbar;
