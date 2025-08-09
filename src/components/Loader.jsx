import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-4 border-t-white border-gray-700"></div>
      <p>Loading Content...</p>
    </div>
  );
};

export default Loader;
