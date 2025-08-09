import React, { useEffect, useRef, useState } from "react";
import { assets, blogCategories } from "../../assets/assets";
import Quill from "quill";
import { useDataContext } from "../../context/DataContext";
import toast from "react-hot-toast";
import { parse } from "marked";

const AddBlog = () => {
  const { axios } = useDataContext();

  const [image, setImage] = useState(null);
  const [isPublished, setIspublished] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const imageRef = useRef(null);
  const editorRef = useRef(null);
  const quillRef = useRef(null);

  const blogData = {
    title: useRef(""),
    subTitle: useRef(""),
    category: useRef("startup"),
    description: "",
  };

  const generateDescriptionWithAI = async () => {
    try {
      setLoading(true);
      if (
        !blogData.title.current.value ||
        blogData.title.current.value === ""
      ) {
        return toast.error("Title is required to generate content");
      }

      const { data } = await axios.post("/blog/generate", {
        prompt: blogData.title.current.value,
      });
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsAdding(true);

      const blog = {
        title: blogData.title.current.value,
        subTitle: blogData.subTitle.current.value,
        description: quillRef.current.root.innerHTML,
        category: blogData.category.current.value,
        isPublished,
      };

      const formData = new FormData();
      formData.append("blog", JSON.stringify(blog));
      formData.append("image", image);

      const { data } = await axios.post("/blog/add", formData);
      if (data.success) {
        toast.success(data.message);
        setImage(null);
        blogData.title.current.value = "";
        blogData.subTitle.current.value = "";
        blogData.category.current.value = "";
        quillRef.current.root.innerHTML = "";
        setIspublished(false);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsAdding(false);
    }
  };

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: "snow" });
    }
  }, []);

  return (
    <form
      className="flex-1 bg-blue-50/50 text-gray-600 h-full overflow-scroll"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded">
        <p>Upload thumbnail</p>
        <label>
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload-area"
            className="mt-2 h-20 rounded cursor-pointer"
            onClick={() => imageRef.current.click()}
          />
        </label>
        <input
          type="file"
          id="image"
          ref={imageRef}
          hidden
          required
          onChange={(e) => setImage(e.target.files[0])}
        />

        <p className="mt-4">Blog title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          ref={blogData.title}
        />

        <p className="mt-4">Sub title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded"
          ref={blogData.subTitle}
        />

        <p className="mt-4">Blog description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative">
          {loading && (
            <div className="absolute left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-black/10 mt-2">
              <div className="w-8 h-8 rounded-full border-2 border-t-white animate-spin"></div>
            </div>
          )}
          <div ref={editorRef} className="text-sm"></div>
          <button
            type="button"
            className="absolute bottom-1 right-2 ml-2 text-xs text-white bg-black/70 px-4 py-1.5 rounded hover:underline cursor-pointer"
            onClick={generateDescriptionWithAI}
            disabled={loading}
          >
            {loading ? "Generating Content..." : "Generate with AI"}
          </button>
        </div>

        <p className="mt-4">Blog category</p>
        <select
          ref={blogData.category}
          name="category"
          className="mt-2 px-3 py-2 border text-gray-500 border-gray-300 outline-none rounded"
        >
          <option value="">Select category</option>
          {blogCategories.map((category, index) => {
            return (
              <option value={category} key={index + 1}>
                {category}
              </option>
            );
          })}
        </select>

        <div className="flex gap-2 mt-4">
          <p>Publish Now</p>
          <input
            className="scale-125 cursor-pointer"
            type="checkbox"
            checked={isPublished}
            onChange={(e) => setIspublished(e.target.checked)}
          />
        </div>

        <button
          className="mt-8 w-40 h-10 bg-primary text-white rounded cursor-pointer text-sm"
          type="submit"
          disabled={isAdding}
        >
          {isAdding ? "Adding..." : "Add Blog"}
        </button>
      </div>
    </form>
  );
};

export default AddBlog;
