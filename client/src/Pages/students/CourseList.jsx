import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Appcontext";
import Searchbar from "../../Components/students/Searchbar";
import { useParams } from "react-router-dom";
import CourseCard from "../../Components/students/CourseCard";
import { assets } from "../../assets/assets";
import Footer from "../../Components/students/Footer";

const CourseList = () => {
  const { navigate, allCourses } = useContext(AppContext);
  const { input } = useParams();

  // --------------------------------------------------------------------> for filter the course using search bar
  const [filteredCourse, setFilteredCourse] = useState([]);
  useEffect(() => {
    if (allCourses && allCourses.length > 0) {
      const tempCourse = allCourses.slice();
      input
        ? setFilteredCourse(
            tempCourse.filter((item) =>
              item.courseTitle.toLowerCase().includes(input.toLowerCase())
            )
          )
        : setFilteredCourse(tempCourse);
    }
  }, [allCourses, input]);

  // ------------------------------------------------------------------------------------------------>for filter the course using search bar

  return (
    <>
      <div className="relative md:px-36 px-8 pt-16 pb-8 text-left bg-gradient-to-b from-white to-gray-50">
        <div className="flex md:flex-row flex-col gap-6 items-start justify-between w-full mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl text-gray-900 font-bold mb-2">
              Course <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Catalog</span>
            </h1>
            <p className="text-gray-600">
              <span
                onClick={() => {
                  navigate("/");
                }}
                className="text-blue-600 hover:text-blue-700 cursor-pointer font-medium transition-colors"
              >
                Home
              </span>
              <span className="text-gray-400"> / Course List</span>
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Searchbar data={input} />
          </div>
        </div>
        {input && (
          <div className="inline-flex items-center gap-3 px-4 py-2.5 bg-blue-50 border border-blue-200 rounded-xl mt-4 mb-6 text-gray-700">
            <p className="font-medium">Search: {input}</p>
            <button
              onClick={() => navigate("/course-list")}
              className="ml-2 hover:bg-blue-100 rounded-full p-1 transition-colors"
            >
              <img
                src={assets.cross_icon}
                alt="Clear search"
                className="w-4 h-4 cursor-pointer"
              />
            </button>
          </div>
        )}
        {/* show all courses */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-12 gap-6 px-2 md:p-0">
          {(Array.isArray(filteredCourse) && filteredCourse.length > 0) ? (
            filteredCourse.map((course, index) => (
              <CourseCard key={course._id || index} course={course} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <p className="text-gray-500 text-lg">No courses found. Try a different search.</p>
            </div>
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default CourseList;
