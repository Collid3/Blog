import React, { useEffect, useState } from "react";
import BlogTable from "../../components/admin/BlogList/BlogTable";
import Loader from "../../components/Loader";
import toast from "react-hot-toast";
import { useDataContext } from "../../context/DataContext";

const BlogsList = () => {
  const { axios } = useDataContext();

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/admin/blogs");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (blogs.length < 1) {
    return <Loader />;
  }

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <h1>All blogs</h1>

      <div className="relative max-w-4xl h-4/5 mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <BlogTable blogData={blogs} fetchBlogs={fetchBlogs} />
      </div>
    </div>
  );
};

export default BlogsList;
