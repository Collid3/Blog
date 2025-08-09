import React from "react";
import CommentsTableItems from "./CommentsTableItems";

const CommentsTable = ({ comments, setComments }) => {
  return (
    <table className="w-full text-sm text-gray-500 text-left">
      <thead>
        <tr>
          <th scope="col" className="px-6 py-3">
            Blog Title & Comment
          </th>
          <th scope="col" className="px-6 py-3 max-sm:hidden">
            Date
          </th>
          <th scope="col" className="px-6 py-3">
            Action
          </th>
        </tr>
      </thead>

      <tbody>
        {comments.map((comment) => (
          <CommentsTableItems
            comment={comment}
            key={comment._id}
            setComments={setComments}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CommentsTable;
