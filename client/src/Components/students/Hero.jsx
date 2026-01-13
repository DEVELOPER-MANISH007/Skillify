import React from "react";
import { assets } from "../../assets/assets";
import Searchbar from "./Searchbar";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center w-full md:pt-32 pt-16 pb-20 px-7 md:px-0 space-y-8 text-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-purple-50 opacity-90"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.1),transparent_50%)]"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto space-y-8">
        <h1 className="md:text-home-heading-large text-home-heading-small relative font-bold text-gray-900 max-w-4xl mx-auto leading-tight">
          Empower your future with courses designed{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            to fit your choice
          </span>
          <img
            className="block absolute -bottom-6 right-0 w-24 md:w-36 opacity-20 animate-pulse"
            src={assets.sketch}
            alt="sketch"
          />
        </h1>
        <p className="md:block hidden text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.
        </p>
        <p className="md:hidden text-gray-600 max-w-sm mx-auto text-base">
          We bring together world-class instructors to help you achieve your professional goals.
        </p>
        <div className="pt-4">
          <Searchbar/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
