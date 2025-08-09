import React from "react";

const AddComment = ({ nameRef, contentRef, addComment }) => {
  return (
    <div className="max-w-3xl mx-auto">
      <p className="font-semibold mb-4">Add your comment</p>

      <form
        className="flex flex-col items-start gap-4 max-w-lg"
        onSubmit={(e) => addComment(e)}
      >
        <input
          ref={nameRef}
          type="text"
          placeholder="Name"
          required
          className="w-full p-2 border border-gray-300 rounded outline-none"
        />

        <textarea
          ref={contentRef}
          placeholder="Comment"
          required
          className="w-full p-2 border border-gray-300 rounded outline-none h-48"
        />

        <button
          type="submit"
          className="bg-primary text-white rounded p-1.5 px-8 hover:scale-102 transition-all cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddComment;
