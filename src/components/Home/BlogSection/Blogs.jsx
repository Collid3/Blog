import React, { useState } from "react";
import BlogsNav from "./BlogsNav";
import BlogCard from "./BlogCard";
import { blogCategories } from "../../../assets/assets";
import { useDataContext } from "../../../context/DataContext";

const Blogs = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { input, blogs, loading } = useDataContext();

  const filteredBlogs = () => {
    if (input === "") {
      return blogs;
    }

    return blogs.filter(
      (blog) =>
        blog.title.toLowerCase().includes(input.toLowerCase()) ||
        blog.category.toLowerCase().includes(input.toLowerCase())
    );
  };

  if (loading) {
    return (
      <div className="flex flex-col gap-4 items-center h-[200px] justify-center">
        <div className="h-16 w-16 rounded-full border-4 border-gray-700 border-t-white animate-spin"></div>
        <p>Fetching Blogs...</p>
      </div>
    );
  }

  return (
    <section>
      <nav>
        <BlogsNav
          blogCategories={blogCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </nav>
      {/* Blog List */}
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-20 mx-8 sm:mx-16 xl:mx-40">
        {filteredBlogs()
          .filter((blog) =>
            selectedCategory === "All"
              ? true
              : blog.category === selectedCategory
          )
          .map((blog) => (
            <BlogCard blog={blog} key={blog._id} />
          ))}
      </ul>
      ``
    </section>
  );
};

export default Blogs;
