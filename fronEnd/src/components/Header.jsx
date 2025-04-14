import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="flex justify-between items-center p-5 bg-white shadow-sm shadow-gray-100 relative">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-red-400 cursor-pointer">
          MAHI<span className="text-blue-400">TECH</span>
        </h1>

        {/* Mobile Menu Icon */}
        <div className="md:hidden block" onClick={toggleMenu}>
          <i className="fa-solid fa-bars text-3xl text-black cursor-pointer"></i>
        </div>

        {/* Desktop Menu */}
        <ul className="md:flex flex-none space-x-8 items-center hidden">
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Services</li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Courses</li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">About</li>
          <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Contact Us</li>
          <button className="py-2 px-6 cursor-pointer bg-amber-500 text-gray-700 rounded-sm hover:bg-amber-400 active:bg-amber-600">
            LogIn
          </button>
        </ul>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col space-y-4 p-4 md:hidden z-50">
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Home</li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Services</li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Courses</li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">About</li>
            <li className="text-lg font-medium text-gray-700 hover:text-blue-500 cursor-pointer">Contact Us</li>
            <button className="py-2 px-6 cursor-pointer bg-amber-500 text-gray-700 rounded-sm hover:bg-amber-400 active:bg-amber-600">
              LogIn
            </button>
          </ul>
        )}
      </div>
    </>
  );
};

export default Header;
