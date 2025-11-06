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
     sm:px-10 md:px-14 lg:px-36 border-b
      border-gray-200/50 py-4 backdrop-blur-md ${
        isCourseListPage 
          ? "bg-white/95 shadow-sm" 
          : "bg-gradient-to-r from-blue-50/90 via-cyan-50/90 to-purple-50/90"
      }`}
    >
      <img
        onClick={()=>{navigate('/')}}
        src={assets.logo}
        alt="Skillify Logo"
        className="h-14 md:h-16 lg:h-20 w-auto cursor-pointer hover:scale-105 transition-transform duration-300 object-contain"
        onError={(e) => {
          console.error('Logo failed to load:', assets.logo);
          e.target.style.display = 'none';
        }}
      />
      <div className="hidden md:flex items-center justify-center gap-6 text-gray-700">
        <div className="flex items-center gap-6">
          {user && (
            <>
              <button 
                onClick={becomeEducator}
                className="text-sm font-medium hover:text-blue-600 transition-colors duration-200"
              >
                {isEducator ? 'Educator Dashboard' : "Become Educator"}
              </button>
              <span className="text-gray-300">|</span>
              <Link 
                to="/my-enrollments"
                className="text-sm font-medium hover:text-blue-600 transition-colors duration-200"
              >
                My Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <div className="ml-4">
            <UserButton />
          </div>
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 cursor-pointer text-white px-6 py-2.5 rounded-full font-medium shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Create Account
          </button>
        )}
      </div>
      {/* Mobile menu */}
      <div className="md:hidden flex items-center gap-3 text-gray-600">
        <div className="flex items-center gap-2 text-xs sm:text-sm">
          {user && (
            <>
              <button 
                onClick={becomeEducator}
                className="font-medium hover:text-blue-600 transition-colors"
              >
                {isEducator ? 'Dashboard' : "Educator"}
              </button>
              <span className="text-gray-300">|</span>
              <Link 
                to="/my-enrollments"
                className="font-medium hover:text-blue-600 transition-colors"
              >
                Enrollments
              </Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button 
            onClick={()=>openSignIn()}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <img src={assets.user_icon} alt="user" className="w-5 h-5" />
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
