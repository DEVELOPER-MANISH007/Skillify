import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Searchbar = ({data}) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ? data : "");

  const onSearchHandler = (e) => {
    e.preventDefault();
   navigate('/course-list/'+input)
  };
  return (
    <form
      onSubmit={onSearchHandler}
      className="max-w-2xl w-full md:h-16 h-14 flex items-center bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group focus-within:border-blue-500 focus-within:shadow-blue-500/20"
    >
      <div className="flex items-center justify-center px-4 md:px-5">
        <img
          src={assets.search_icon}
          alt="Search icon"
          className="w-5 h-5 text-gray-400"
        />
      </div>
      <input
        type="text"
        placeholder="Search for courses, skills, or topics..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="flex-1 h-full outline-none text-gray-700 placeholder-gray-400 text-sm md:text-base bg-transparent"
      />
      <button 
        type="submit"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white md:px-8 px-6 md:py-3.5 py-3 mx-2 md:mx-3 rounded-xl font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
      >
        Search
      </button>
    </form>
  );
};

export default Searchbar;
