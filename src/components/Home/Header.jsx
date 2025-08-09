import React, { useRef } from "react";
import { assets } from "../../assets/assets";
import { useDataContext } from "../../context/DataContext";

const HomeHeader = () => {
  const { input, setInput } = useDataContext();
  const inputRef = useRef();

  const submitSearch = (e) => {
    e.preventDefault();
    setInput(inputRef.current.value);
  };

  const clearSearch = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
    setInput("");
  };

  return (
    <div className="mx-8 sm:mx-16 xl:mx-24 relative">
      <div className="text-center mt-20 mb-8">
        <div className="inline-flex items-center justify-center gap-4 px-6 py-1.5 mb-4 border border-primary/40 bg-primary/10 rounded-full text-sm text-primary font-semibold">
          <p>New: AI feature integrated</p>
          <img src={assets.star_icon} alt="star icon" className="w-2.5" />
        </div>

        <h1 className="text-3xl sm:text-6xl font-semibold sm:leading-16 text-gray-700">
          The best <span className="text-primary">blogging</span> platform
        </h1>

        <p className="my-6 sm:my-8 max-w-2xl m-auto max-sm:text-xl text-gray-500">
          This is a place to share your thoughts and knowledge on the
          transforming IT industry. From software development frameworks and
          techniques to cybersecurity tips and topics.
        </p>

        <form
          className="flex justify-between max-w-lg max-sm:scale-75 mx-auto border border-gray-300 bg-white rounded overflow-hidden"
          onSubmit={(e) => (input === "" ? submitSearch(e) : clearSearch(e))}
        >
          <input
            type="search"
            className="w-full pl-4 outline-none"
            placeholder="Search for blogs"
            required
            ref={inputRef}
          />

          <button className="py-1 px-8 m-1.5 bg-primary text-white rounded hover:scale-102 transition-all cursor-pointer">
            {`${input === "" ? "Search" : "Clear"}`}
          </button>
        </form>
      </div>

      <img
        src={assets.gradientBackground}
        alt="gradientBackground"
        className="absolute -top-50 -z-1 opacity-50"
      />
    </div>
  );
};

export default HomeHeader;
