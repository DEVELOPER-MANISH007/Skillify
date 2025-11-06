import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/Appcontext";
import { assets, dummyDashboardData } from "../../assets/assets";
import Loading from "../../Components/students/Loading";
import axios from "axios";
import { toast } from "react-toastify";

const Dashboard = () => {
  const { currency, backendUrl, getToken, isEducator } = useContext(AppContext);

  const [dashboardData, setDashboardData] = useState(null);

  const fetchDashboardData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(backendUrl + "/api/educator/dashboard", {
        // Note: include a space after 'Bearer' so the auth header is valid
        headers: { Authorization: `Bearer ${token}` },
      });
      if (data.success) {
        // Server returns payload under `data`, not `dashboardData`
        setDashboardData(data.data);
      } else {
        toast.error(data.message || "Failed to fetch dashboard data");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  useEffect(() => {
    fetchDashboardData();
  }, []);

  return dashboardData ? (
    <div className="min-h-screen flex flex-col items-start justify-between gap-8 md:p-8 md:pb-0 p-4 pt-8 pb-0 bg-gradient-to-br from-gray-50 to-white">
      <div className="w-full space-y-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your overview.</p>
        </div>
        <div className="flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-4 shadow-lg border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 w-full sm:w-64 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="p-3 bg-blue-100 rounded-xl">
              <img src={assets.patients_icon} alt="Students" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {dashboardData.enrolledStudentsData?.length || 0}
              </p>
              <p className="text-sm text-gray-600 font-medium">Total Enrollments</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shadow-lg border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-6 w-full sm:w-64 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="p-3 bg-purple-100 rounded-xl">
              <img src={assets.appointments_icon} alt="Courses" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {dashboardData.totalCourses}
              </p>
              <p className="text-sm text-gray-600 font-medium">Total Courses</p>
            </div>
          </div>
          <div className="flex items-center gap-4 shadow-lg border border-green-200 bg-gradient-to-br from-green-50 to-white p-6 w-full sm:w-64 rounded-2xl hover:shadow-xl transition-all duration-300">
            <div className="p-3 bg-green-100 rounded-xl">
              <img src={assets.earning_icon} alt="Earnings" className="w-8 h-8" />
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">
                {currency}
                {dashboardData.totalEarnings}
              </p>
              <p className="text-sm text-gray-600 font-medium">Total Earnings</p>
            </div>
          </div>
        </div>

        <div className="w-full">
          <h2 className="pb-6 text-2xl font-bold text-gray-900">Latest Enrollments</h2>
          <div className="flex flex-col items-center max-w-5xl w-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-lg">
            <table className="table-fixed md:table-auto w-full overflow-hidden">
              <thead className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 text-sm text-left">
                <tr>
                  <th className="px-6 py-4 font-bold text-gray-900 text-center hidden sm:table-cell">
                    #
                  </th>
                  <th className="px-6 py-4 font-bold text-gray-900">Student Name</th>
                  <th className="px-6 py-4 font-bold text-gray-900">Course Title</th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600 divide-y divide-gray-100">
                {dashboardData.enrolledStudentsData.map((item, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-center hidden sm:table-cell text-gray-500 font-medium">
                      {index + 1}
                    </td>
                    <td className="md:px-6 px-4 py-4 flex items-center space-x-3">
                      <img
                        src={item.student.imageUrl}
                        className="w-10 h-10 rounded-full ring-2 ring-gray-200"
                        alt={item.student.name}
                      />
                      <span className="truncate font-medium text-gray-900">{item.student.name}</span>
                    </td>
                    <td className="px-6 py-4 truncate font-medium text-gray-800">{item.courseTitle}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Dashboard;

