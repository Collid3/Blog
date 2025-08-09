import React, { useState } from "react";
import { assets } from "../../../assets/assets";
import { useDataContext } from "../../../context/DataContext";
import toast from "react-hot-toast";

const BlogTableItems = ({ blog, index, fetchBlogs }) => {
  const { axios } = useDataContext();

  const blogDate = new Date(blog.createdAt);
  const [loading, setLoading] = useState({
    id: null,
    state: false,
    message: "",
  });

  const togglePublish = async () => {
    setLoading({
      id: blog._id,
      state: true,
      message: blog.isPublished ? "Unpublishing..." : "Publishing...",
    });

    try {
      const { data } = await axios.put(`/blog/${blog._id}/toggle-publish`);
      if (data.success) {
        fetchBlogs();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading({
        id: null,
        state: false,
        message: "",
      });
    }
  };

  const deleteBlog = async () => {
    const confirm = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (!confirm) return;

    setLoading({
      id: blog._id,
      state: true,
      message: "deleting...",
    });

    try {
      const { data } = await axios.delete(`/blog/${blog._id}`);
      if (data.success) {
        fetchBlogs();
        toast.success(data.message);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading({
        id: null,
        state: false,
        message: "",
      });
    }
  };

  return (
    <tr className="border-y border-gray-300">
      <th className="px-2 py-4">{index}</th>
      <td className="px-2 py-4">{blog.title}</td>
      <td className="px-2 py-4 max-sm:hidden">{blogDate.toDateString()}</td>
      <td className="px-2 py-4 max-sm:hidden">
        <p
          className={`${
            blog.isPublished ? "text-green-600" : "text-orange-700"
          }`}
        >
          {blog.isPublished ? "Published" : "Unpublished"}
        </p>
      </td>
      {loading.id === blog._id && loading.state ? (
        <td className="text-orange-400">{loading.message}</td>
      ) : (
        <td className="px-2 py-4 flex text-sm gap-3">
          <button
            className="border px-2 py-0.5 mt-1 rounded cursor-pointer"
            onClick={togglePublish}
          >
            {blog.isPublished ? "Unpublish" : "Publish"}
          </button>

          <img
            src={assets.cross_icon}
            alt="cross-icon"
            className="w-8 cursor-pointer hover:outline-1 outline-red-500 rounded-full"
            onClick={deleteBlog}
          />
        </td>
      )}
    </tr>
  );
};

export default BlogTableItems;
