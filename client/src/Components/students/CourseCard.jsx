import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { AppContext } from "../../context/Appcontext";
import { Link } from "react-router-dom";
const CourseCard = ({ course }) => {
  const { currency, calclulaterating } = useContext(AppContext);

  return (
    <Link
      to={"/course/" + course._id}
      onClick={() => scrollTo(0, 0)}
      className="group bg-white border border-gray-200/60 pb-6 overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover-lift"
    >
      <div className="relative overflow-hidden">
        <img 
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500" 
          src={course.courseThumbnail} 
          alt={course.courseTitle} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-5 text-left space-y-3">
        <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {course.courseTitle}
        </h3>
        <p className="text-sm text-gray-600 font-medium">
          {course.educator?.name || "Unknown Instructor"}
        </p>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-semibold text-gray-900">{calclulaterating(course)}</span>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <img
                key={i}
                src={
                  i < Math.floor(calclulaterating(course))
                    ? assets.star
                    : assets.star_blank
                }
                alt=""
                className="w-4 h-4"
              />
            ))}
          </div>
          <span className="text-sm text-gray-500">({course.courseRatings?.length || 0})</span>
        </div>
        <div className="flex items-center gap-3 pt-2">
          <p className="text-xl font-bold text-gray-900">
            {currency}
            {(
              course.coursePrice -
              (course.discount * course.coursePrice) / 100
            ).toFixed(2)}
          </p>
          {course.discount > 0 && (
            <span className="text-sm text-gray-500 line-through">
              {currency}{course.coursePrice}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
