import React from "react";
import Hero from "../images/Hero1.jpg";

const HeroSection = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col md:flex-row justify-between items-center px-6 md:px-24 pt-20 bg-white">
        {/* Left content */}
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold text-gray-800">
            Let's start your dream about TECH. <br />
            This website is very powerful for learning about technology.
          </h1>
          <button className="py-3 px-7 mt-8 bg-amber-500 rounded-md font-bold text-white hover:bg-amber-600 transition-all">
            Get Started
            <i className="fa-solid fa-arrow-right pl-2"></i>
          </button>
        </div>

        {/* Right image */}
        <div className="w-full md:w-[45%]">
          <img src={Hero} className="w-full object-cover" alt="Hero" />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
