import React from "react";
import { assets } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-6 lg:px-8 border-b border-gray-200/60 py-3 md:py-4 bg-white/98 backdrop-blur-lg shadow-md">
      <Link to="/" className="group">
        <img 
          src={assets.logo} 
          alt="Skillify Logo" 
          className="h-12 md:h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300 object-contain" 
        />
      </Link>
      <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
        <div className="hidden sm:flex items-center gap-3 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 border border-gray-200/50">
          <p className="text-sm md:text-base font-medium text-gray-700">
            Hi! <span className="font-semibold text-gray-900">{user ? user.fullName : 'Developers'}</span>
          </p>
        </div>
        {user ? (
          <div className="flex items-center">
            <UserButton />
          </div>
        ) : (
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-50 border border-gray-200/50">
            <img 
              className="w-8 h-8 rounded-full ring-2 ring-gray-200" 
              src={assets.profile_img} 
              alt="Profile" 
            />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
