import React from "react";
import { assets } from "../../assets/assets";
import { useDataContext } from "../../context/DataContext";

const AdminHeader = () => {
  const { navigate, setToken, axios } = useDataContext();

  const logout = () => {
    localStorage.removeItem("token");
    axios.defaults.headers.common["Authorization"] = null;
    setToken(null);
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center h-[70px] py-2 px-4 sm:px-12 border-b border-gray-200">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-40 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <button
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-1.5"
        onClick={logout}
      >
        Logout
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </header>
  );
};

export default AdminHeader;
