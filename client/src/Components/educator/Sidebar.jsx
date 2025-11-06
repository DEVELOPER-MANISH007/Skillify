import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import {AppContext} from '../../context/Appcontext'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

  const {isEducator}  = useContext(AppContext)

  const menuItems= [

    {name:"dashboard",icon:assets.home_icon,path:"/educator"},
    {name:"my courses",icon:assets.my_course_icon,path:"/educator/my-courses"},
    {name:"add course",icon:assets.add_icon,path:"/educator/add-course"},
    {name:"student enrolled",icon:assets.person_tick_icon,path:"/educator/student-enrolled"},
  ]


  return isEducator && (
    <aside className='md:w-64 w-20 border-r min-h-screen text-base border-gray-200 bg-white/50 backdrop-blur-sm py-4 flex flex-col'>
      {menuItems.map((item)=>(
        <NavLink
        to={item.path}
        key={item.name}
        end={item.path === "/educator"}
        className={({isActive}) => `flex items-center justify-center md:justify-start gap-3 md:gap-4 px-3 md:px-5 py-3 md:py-3.5 mx-2 rounded-xl text-gray-600 hover:bg-gray-100/80 transition-all duration-200 ${
          isActive 
            ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 text-blue-700 font-semibold shadow-sm' 
            : 'hover:text-gray-900'
        }`}
        >
        <img src={item.icon} alt={item.name} className='w-5 h-5 md:w-6 md:h-6 shrink-0'/>
        <p className='md:block hidden capitalize text-sm font-medium'>{item.name}</p>
        </NavLink>
      ))}
    </aside>
  )
}

export default Sidebar