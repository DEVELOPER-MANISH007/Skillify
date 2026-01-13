import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/Appcontext";
import CourseCard from "./CourseCard";

const CourseSection  = () => {
  const {allCourses} = useContext(AppContext)
  return (
    <div className="py-20 md:px-40 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Learn from the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Best</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results.
          </p>
        </div>
        <div className="grid grid-cols-auto px-4 md:px-0 md:my-16 my-10 gap-6 md:gap-8">
          {allCourses && allCourses.length > 0 ? (
            allCourses.slice(0,4).map((course,index)=> (
              <CourseCard key={course._id || index} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500 text-lg">Loading courses...</p>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <Link
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            to={"/course-list"}
            onClick={() => scrollTo(0, 0)}
          >
            Show All Courses
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseSection