import React from "react";
import BlogHeader from "./BlogHeader";
import Comments from "./Comments";
import AddComment from "./AddComment";
import ShareButtons from "./ShareButtons";

const BlogContent = ({
  comments,
  blog,
  assets,
  nameRef,
  contentRef,
  addComment,
}) => {
  return (
    <div className="relative">
      {/* Background image */}
      <img
        src={assets.gradientBackground}
        alt="background"
        className="absolute top-50 -z-1 opacity-50"
      />

      <BlogHeader blog={blog} />

      <div className="mx-5 max-w-4xl md:mx-auto my-10 mt-6">
        <img
          src={blog.image}
          alt=""
          className="rounded-3xl mb-10 w-sm mx-auto"
        />

        <div
          className="rich-text"
          dangerouslySetInnerHTML={{ __html: blog.description }}
        ></div>

        <Comments comments={comments} assets={assets} />
        <AddComment
          nameRef={nameRef}
          contentRef={contentRef}
          addComment={addComment}
        />
        <ShareButtons assets={assets} />
      </div>
    </div>
  );
};

export default BlogContent;
