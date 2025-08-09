import moment from "moment";
import React from "react";

const BlogHeader = ({ blog }) => {
  return (
    <div className="text-center mt-4 text-gray-600">
      <p className="text-primary py-4 font-medium">
        Published on {moment(blog.createdAt).format("MMMM Do YYYY")}
      </p>
      <h1 className="text-2xl sm:text-4xl font-semibold max-w-2xl mx-auto text-gray-800">
        {blog.title}
      </h1>
      <h2 className="my-5 max-w-lg truncate mx-auto">{blog.subTitle}</h2>
      {/* Author name - will get when we sign  */}
      <p className="inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary">
        Jerry Masola
      </p>
    </div>
  );
};

export default BlogHeader;
