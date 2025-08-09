import React from "react";
import Moment from "moment";

const Comments = ({ comments, assets }) => {
  return (
    <div className="mt-14 mb-10 max-w-3xl mx-auto">
      <p className="font-semibold">Comments ({comments.length})</p>

      <ul className="flex flex-col gap-4">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="relative bg-primary/2 border border-primary/5 max-w-xl p-4 rounded text-gray-600"
          >
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.user_icon} alt="user" className="w-6" />
              <p className="font-medium">{comment.name}</p>
            </div>

            <p className="text-sm max-w-md ml-8">{comment.content}</p>
            <p className="absolute right-4 bottom-3 flex items-center gap-2 text-xs">
              {Moment(comment.createdAt).fromNow()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
