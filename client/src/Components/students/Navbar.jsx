import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { AppContext } from "../../context/Appcontext";
import axios from "axios";
import { toast } from "react-toastify";
import { useTheme } from "../../context/ThemeContext";

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

  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={`flex items-center justify-between px-4 
     sm:px-10 md:px-14 lg:px-36 border-b u-border py-5 u-surface ${isCourseListPage ? "" : "u-glass"}`}
    >
      <img
      onClick={()=>{navigate('/')}}
        src={assets.logo}
        alt="logo"
        className="w-28 lg:w-32 cursor-pointer "
      />
      <div className="hidden md:flex items-center justify-center gap-5 u-muted ">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button onClick={becomeEducator}>{isEducator?'Educator Dashboard':"Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments </Link>
            </>
          )}
        
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="u-btn-primary cursor-pointer px-5 py-2 rounded-full shadow-sm hover:opacity-90"
          >
            Create Account
          </button>
        )}
        <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="ml-2 inline-flex items-center justify-center w-10 h-10 rounded-full border u-border hover:bg-black/5 dark:hover:bg-white/5 transition"
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          <span className="text-xl">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
      </div>
      {/* {for phone screen} */}
      <div className="md:hidden flex items-center gap-2 u-muted sm:gap-5 ">
        <div className=" flex items-center gap-1 sm:gap-2 max-sm:text-xs" >
        {user && (
            <>
                 <button onClick={becomeEducator}>{isEducator?'Educator Dashboard':"Become Educator"}</button>|
              <Link to="/my-enrollments">My Enrollments </Link>
            </>
          )}
        </div>
       {
        user ? <UserButton/> :
        <button onClick={()=>openSignIn()}>

        <img src={assets.user_icon} alt="" />
      </button>
       }
       <button
          aria-label="Toggle theme"
          onClick={toggleTheme}
          className="inline-flex items-center justify-center w-9 h-9 rounded-full border u-border hover:bg-black/5 dark:hover:bg-white/5 transition"
          title={theme === 'dark' ? 'Switch to light' : 'Switch to dark'}
        >
          <span className="text-lg">{theme === 'dark' ? '☀️' : '🌙'}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
