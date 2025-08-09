import React from "react";
import { assets } from "../../../assets/assets";
import { useDataContext } from "../../../context/DataContext";
import toast from "react-hot-toast";

const CommentsTableItems = ({ comment, setComments }) => {
  const { axios } = useDataContext();

  const approveComment = async () => {
    try {
      const { data } = await axios.put(`/admin/comment/approve/${comment._id}`);

      if (data.success) {
        toast.success(data.message);

        setComments((prev) => {
          return prev.map((commentItem) =>
            commentItem._id === comment._id
              ? { ...commentItem, isApproved: true }
              : commentItem
          );
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const deleteComment = async () => {
    try {
      const { data } = await axios.delete(`/admin/comment/${comment._id}`);
      if (data.success) {
        toast.success(data.message);

        setComments((prev) => {
          return prev.filter((commentItem) => commentItem._id !== comment._id);
        });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const blogDate = new Date(comment.createdAt);

  return (
    <tr className="order-y border-gray-300">
      <td className="px-6 py-4">
        <b className="font-medium text-gray-600">Blog</b> : {comment.blog.title}
        <br />
        <br />
        <b className="font-medium text-gray-600">Name</b> : {comment.name}
        <br />
        <b className="font-medium text-gray-600">Comment</b> : {comment.content}
      </td>

      <td className="px-6 py-4 max-sm:hidden">
        {blogDate.toLocaleDateString()}
      </td>

      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">
          {!comment.isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              alt="tick-icon"
              className="w-5 hover:scale-110 cursor-pointer"
            />
          ) : (
            <p className="text-xs border border-green-600 bg-green-100 text-green-600 rounded-full px-3 py-1">
              Approved
            </p>
          )}

          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            alt="bin-icon"
            className="w-5 hover:scale-110 cursor-pointer transition-all"
          />
        </div>
      </td>
    </tr>
  );
};

export default CommentsTableItems;
