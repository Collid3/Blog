import React from "react";
import { assets } from "../assets/assets";
import { useDataContext } from "../context/DataContext";

const Header = () => {
  const { navigate, token } = useDataContext();

  return (
    <header className="flex justify-between items-center py-5 mx-8 sm:mx-20 xl:mx-32">
      <img
        src={assets.logo}
        alt="logo"
        className="w-32 sm:w-44 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <button
        className="flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-10 py-1.5"
        onClick={() => navigate("/admin")}
      >
        {token ? "Dashboard" : "Login"}
        <img src={assets.arrow} alt="arrow" className="w-3" />
      </button>
    </header>
  );
};

export default Header;
