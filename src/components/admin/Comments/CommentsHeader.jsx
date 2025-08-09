import React from "react";

const CommentsHeader = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-between items-center max-w-3xl">
      <h1>Comments</h1>

      <div className="flex gap-4">
        <button
          className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
            filter === "Approved" ? "text-primary" : "text-gray-700"
          }`}
          onClick={() =>
            setFilter((prev) =>
              prev === "Not Approved" ? "Approved" : "Not Approved"
            )
          }
        >
          Approved
        </button>

        <button
          className={`shadow-custom-sm border rounded-full px-4 py-1 cursor-pointer text-xs ${
            filter === "Not Approved" ? "text-primary" : "text-gray-700"
          }`}
          onClick={() =>
            setFilter((prev) =>
              prev === "Not Approved" ? "Approved" : "Not Approved"
            )
          }
        >
          Not Approved
        </button>
      </div>
    </div>
  );
};

export default CommentsHeader;
