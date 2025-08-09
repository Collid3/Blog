import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = () => {
  const sidebarItems = [
    {
      name: "Dashboard",
      icon: assets.home_icon,
      path: "/admin",
    },
    {
      name: "Add blogs",
      icon: assets.add_icon,
      path: "/admin/addBlog",
    },
    {
      name: "Blog lists",
      icon: assets.list_icon,
      path: "/admin/blogs",
    },
    {
      name: "Comments",
      icon: assets.comment_icon,
      path: "/admin/comments",
    },
  ];

  return (
    <div className="flex flex-col border-r border-gray-200 min-h-full pt-6">
      {sidebarItems.map((item, index) => (
        <NavLink
          key={index}
          end={true}
          to={item.path}
          className={({ isActive }) =>
            `flex items-center gap-3 py-3 px-3 md:px-9 md:min-w-64 cursor-pointer ${
              isActive && "bg-primary/10 border-r-4 border-primary"
            }`
          }
        >
          <img src={item.icon} alt="dashboard-icon" className="min-w-4 w-5" />
          <p className="hidden md:inline-block">{item.name}</p>
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
