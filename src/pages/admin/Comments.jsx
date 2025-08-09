import React, { useEffect, useState } from "react";
import CommentsHeader from "../../components/admin/Comments/CommentsHeader";
import CommentsTable from "../../components/admin/Comments/CommentsTable";
import toast from "react-hot-toast";
import { useDataContext } from "../../context/DataContext";

const Comments = () => {
  const { axios } = useDataContext();

  const [comments, setComments] = useState([]);
  const [filter, setFilter] = useState("Not Approved");

  const fetchComments = async () => {
    try {
      const { data } = await axios.get("/admin/comments");

      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50">
      <CommentsHeader filter={filter} setFilter={setFilter} />

      <div className="relative max-w-4xl h-4/5 mt-4 overflow-x-auto shadow rounded-lg scrollbar-hide bg-white">
        <CommentsTable
          comments={comments.filter((comment) => {
            if (filter === "Approved") return comment.isApproved;
            return !comment.isApproved;
          })}
          setComments={setComments}
        />
      </div>
    </div>
  );
};

export default Comments;
