import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Appcontext";
import { Line } from "rc-progress";
import Footer from "../../Components/students/Footer";
import { toast } from "react-toastify";
import axios from "axios";

const Myenrollements = () => {
  const {
    enrolledCourses,
    calculateCourseDuration,
    navigate,
    backendUrl,
    getToken,
    CalculateNOofLecutres,
    userData,
    fetchUserEnrolledCourse,
  } = useContext(AppContext);

  const [progressArray, setProgressArray] = useState([]);

  const getallcourseProgrress = async () => {
    try {
      const token = await getToken();
      const tempProgressArray = await Promise.all(
        enrolledCourses.map(async (course) => {
          const { data } = await axios.post(
            `${backendUrl}/api/user/get-course-progress`,
            { courseId: course._id },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          let totalLectures = CalculateNOofLecutres(course);
          const lectureCompleted = data.progressData
            ? data.progressData.lectureCompleted.length
            : 0;
          return { totalLectures, lectureCompleted }; 
        })
      );
      setProgressArray(tempProgressArray);
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    if(userData){
     fetchUserEnrolledCourse();
    }
  }, [userData]);

  useEffect(() => {
    if(enrolledCourses.length > 0){
      getallcourseProgrress();
    }
  }, [enrolledCourses]);
  return (
    <>
      <div className="md:px-36 px-8 pt-12 pb-8 bg-gradient-to-b from-white to-gray-50 min-h-screen">
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">My Enrollments</h1>
          <p className="text-gray-600">Track your learning progress</p>
        </div>
        {enrolledCourses && enrolledCourses.length > 0 ? (
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="md:table-auto table-fixed w-full overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-sm text-left max-sm:hidden">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900">Course</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Duration</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Progress</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Status</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-gray-100">
                {(enrolledCourses || []).map((course, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="md:px-6 px-4 pl-4 md:pl-6 py-5">
                      <div className="flex items-center space-x-4">
                        <img
                          src={course.courseThumbnail}
                          alt={course.courseTitle}
                          className="w-20 sm:w-24 md:w-28 rounded-lg shadow-md"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="mb-2 font-semibold text-gray-900 max-sm:text-sm">{course.courseTitle}</p>
                          <Line
                            strokeWidth={5}
                            strokeColor="#3b82f6"
                            trailColor="#e5e7eb"
                            percent={
                              progressArray[index]
                                ? (progressArray[index].lectureCompleted * 100) /
                                  progressArray[index].totalLectures
                                : 0
                            }
                            className="rounded-full"
                          />
                          <p className="text-xs text-gray-500 mt-1">
                            {progressArray[index] &&
                              `${Math.round((progressArray[index].lectureCompleted * 100) / progressArray[index].totalLectures)}% Complete`}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 max-sm:hidden text-gray-600 font-medium">
                      {calculateCourseDuration(course)}
                    </td>
                    <td className="px-6 py-5 text-gray-600 font-medium">
                      {progressArray[index] &&
                        `${progressArray[index].lectureCompleted}/${progressArray[index].totalLectures}`}{" "}
                      <span className="text-gray-500">Lectures</span>
                    </td>
                    <td className="px-6 py-5 max-sm:text-right">
                      <button
                        onClick={() => navigate("/player/" + course._id)}
                        className="px-4 cursor-pointer py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 max-sm:text-xs text-white rounded-xl font-medium shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                      >
                        {progressArray[index] &&
                        progressArray[index].lectureCompleted /
                          progressArray[index].totalLectures ===
                          1
                          ? "Completed"
                          : "Continue"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg border border-gray-200">
            <p className="text-gray-500 text-lg mb-4">No enrolled courses yet.</p>
            <button
              onClick={() => navigate("/course-list")}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Browse Courses
            </button>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Myenrollements;
