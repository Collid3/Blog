import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { assets } from "../assets/assets";
import Loader from "../components/Loader";
import BlogContent from "../components/BlogPage/BlogContent";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDataContext } from "../context/DataContext";
import toast from "react-hot-toast";

const BlogPage = () => {
  const { blogId } = useParams();
  const { axios } = useDataContext();

  const [blog, setBlog] = useState(null);
  const [comments, setComments] = useState([]);
  const nameRef = useRef("");
  const contentRef = useRef("");

  const fetchBlogData = async () => {
    try {
      const { data } = await axios.get(`/blog/${blogId}`);
      data.success ? setBlog(data.blog) : toast.error(data.message);
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const fetchComments = async () => {
    try {
      const { data } = await axios.get(`/blog/${blogId}/comments`);

      data.success ? setComments(data.comments) : toast.error(data.message);
    } catch (error) {
      return toast.error(error.message);
    }
  };

  const addComment = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post("/blog/comment/add", {
        blog: blogId,
        name: nameRef.current.value,
        content: contentRef.current.value,
      });

      if (data.success) {
        toast.success(data.message);
        nameRef.current.value = "";
        contentRef.current.value = "";
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      return toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchComments();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return blog ? (
    <>
      <Header />
      <BlogContent
        comments={comments}
        blog={blog}
        assets={assets}
        nameRef={nameRef}
        contentRef={contentRef}
        addComment={addComment}
      />
      <Footer />
    </>
  ) : (
    <Loader />
  );
};

export default BlogPage;
