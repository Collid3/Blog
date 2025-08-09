import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";
import AdminHeader from "../../components/admin/AdminHeader";

const Layout = () => {
  return (
    <div>
      <AdminHeader />

      <div className="flex h-[calc(100vh-80px)]">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
