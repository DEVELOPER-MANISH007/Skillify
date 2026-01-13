import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/Appcontext";
import axios from "axios";
import { toast } from "react-toastify";

const Navbar = () => {

const {navigate,isEducator,backendUrl,setIsEducator,getToken} = useContext(AppContext)

  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();


const becomeEducator = async()=>{
  try {
    
    if(isEducator){
      navigate('/educator')
      return;
    }
    const token = await getToken()
    const {data} =  await axios.get(backendUrl+'/api/educator/update-role',{
      headers:{Authorization:`Bearer ${token}`}
    })
    if(data.success){
      setIsEducator(true )
      toast.success(data.message)
    }else{
      toast.error(data.message)
    }

  } catch (error) {
    toast.error(error.message)
  }
}

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-4 
     sm:px-6 md:px-8 lg:px-12 xl:px-16 border-b
      border-gray-200/60 py-3 md:py-4 backdrop-blur-lg transition-all duration-300 ${
        isCourseListPage 
          ? "bg-white/98 shadow-md" 
          : "bg-gradient-to-r from-blue-50/95 via-cyan-50/95 to-purple-50/95 shadow-sm"
      }`}
    >
      <div 
        onClick={()=>{navigate('/')}}
        className="cursor-pointer group"
      >
        <img
          src={assets.logo}
          alt="Skillify Logo"
          className="h-12 md:h-14 lg:h-16 w-auto group-hover:scale-105 transition-transform duration-300 object-contain"
          onError={(e) => {
            console.error('Logo failed to load:', assets.logo);
            e.target.style.display = 'none';
          }}
        />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-6">
        {user && (
          <div className="flex items-center gap-4 lg:gap-6 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-gray-200/50">
            <button 
              onClick={becomeEducator}
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
            >
              {isEducator ? 'Educator Dashboard' : "Become Educator"}
            </button>
            <div className="h-4 w-px bg-gray-300"></div>
            <Link 
              to="/my-enrollments"
              className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-200 whitespace-nowrap"
            >
              My Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <div className="ml-2">
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 lg:px-6 py-2.5 rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 whitespace-nowrap"
          >
            Create Account
          </button>
        )}
      </div>
      
      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center gap-2">
        {user && (
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/50">
            <button 
              onClick={becomeEducator}
              className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isEducator ? 'Dashboard' : "Educator"}
            </button>
            <div className="h-3 w-px bg-gray-300"></div>
            <Link 
              to="/my-enrollments"
              className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
            >
              Enrollments
            </Link>
          </div>
        )}
        {user ? (
          <UserButton />
        ) : (
          <button 
            onClick={()=>openSignIn()}
            className="p-2 hover:bg-gray-100/80 rounded-full transition-colors backdrop-blur-sm bg-white/60 border border-gray-200/50"
          >
            <img src={assets.user_icon} alt="user" className="w-5 h-5" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
