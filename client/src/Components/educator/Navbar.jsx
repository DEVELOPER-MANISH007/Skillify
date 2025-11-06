import React from "react";
import { assets } from "../../assets/assets";
import { UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user } = useUser();

  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between px-4 md:px-8 border-b border-gray-200/50 py-4 bg-white/95 backdrop-blur-md shadow-sm">
      <Link to="/">
        <img src={assets.logo} alt="Skillify Logo" className="h-14 md:h-16 lg:h-20 w-auto hover:scale-105 transition-transform duration-300 object-contain" />
      </Link>
      <div className="flex items-center gap-4 text-gray-700">
        <p className="text-sm md:text-base font-medium">
          Hi! <span className="text-gray-900">{user ? user.fullName : 'Developer'}</span>
        </p>
        {user ? (
          <UserButton />
        ) : (
          <img className="w-8 h-8 rounded-full" src={assets.profile_img} alt="Profile" />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
