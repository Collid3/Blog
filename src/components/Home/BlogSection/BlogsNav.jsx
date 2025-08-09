import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";

const BlogsNav = ({
  blogCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <ul className="flex justify-center gap-2 sm:gap-8 my-10 relative">
      {blogCategories.map((category) => (
        <li key={category} className="relative">
          <button
            className={`cursor-pointer text-gray-500 capitalize px-4 pt-0.5 ${
              selectedCategory === category &&
              "bg-primary rounded-full text-white"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}

            {selectedCategory === category && (
              <motion.div
                layoutId="underline"
                transition={{ type: "spring", stiffness: 500, damping: 38 }}
                className="absolute left-0 right-0 top-0 h-7 -z-1 bg-primary rounded-full"
              ></motion.div>
            )}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default BlogsNav;
