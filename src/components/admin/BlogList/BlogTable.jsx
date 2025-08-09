import React from "react";
import BlogTableItems from "./BlogTableItems";

const BlogTable = ({ blogData, fetchBlogs }) => {
  return (
    <table className="w-full text-sm text-gray-500">
      <thead className="text-xs text-gray-600 text-left uppercase">
        <tr>
          <th scope="col" className="px-2 py-4 xl:px-6">
            #
          </th>

          <th scope="col" className="px-2 py-4">
            Blog Title
          </th>

          <th scope="col" className="px-2 py-4 max-sm:hidden">
            Date
          </th>

          <th scope="col" className="px-2 py-4 max-sm:hidden">
            Status
          </th>

          <th scope="col" className="px-2 py-4">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {blogData.map((blog, index) => {
          return (
            <BlogTableItems
              key={index}
              blog={blog}
              index={index + 1}
              fetchBlogs={fetchBlogs}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default BlogTable;
