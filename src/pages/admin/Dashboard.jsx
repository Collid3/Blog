import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import BlogTable from "../../components/admin/BlogList/BlogTable";
import toast from "react-hot-toast";
import { useDataContext } from "../../context/DataContext";

const Dashboard = () => {
  const { axios } = useDataContext();

  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: [],
  });

  const dashboardItems = [
    {
      name: "Blogs",
      text: dashboardData.blogs,
      icon: assets.dashboard_icon_1,
    },
    {
      name: "Comments",
      text: dashboardData.comments,
      icon: assets.dashboard_icon_2,
    },
    {
      name: "Drafts",
      text: dashboardData.drafts,
      icon: assets.dashboard_icon_3,
    },
  ];

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get("/admin/dashboard");
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 p-4 md:p-10 bg-blue-50/50">
      <div className="flex flex-wrap gap-4">
        {dashboardItems.map((item, index) => (
          <div
            key={index + 1}
            className="flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all"
          >
            <img src={item.icon} alt="dashboard-icon" />

            <div>
              <p className="text-xl font-semibold text-gray-600">{item.text}</p>
              <p className="text-gray-400 font-light">{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <div>
        <div className="flex items-center gap-3 mt-6 text-gray-600">
          <img src={assets.dashboard_icon_4} alt="dashboard-icon" />
          <p>Latest Blogs</p>
        </div>

        <div className="relative max-w-4xl mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
          <BlogTable
            blogData={dashboardData.recentBlogs}
            fetchBlogs={fetchDashboard}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
