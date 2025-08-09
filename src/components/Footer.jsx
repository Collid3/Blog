import React from "react";
import { assets, footer_data } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px24 xl:px32 bg-primary/3">
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 py-8 border-b border-gray-500/30 text-gray-500">
        <div>
          <img src={assets.logo} alt="logo" className="w-30 sm:w-44" />
          <p className="max-w-[410px] mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
            fugiat quis a asperiores error nemo adipisci voluptate assumenda
            unde sunt?
          </p>
        </div>

        <div className="flex flex-wrap justify-between w-full md:w-[45%] gap-5">
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>

              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <p className="py-4 text-center text-sm md:text-base text-gray-500/80">
        Copyright {new Date().getFullYear()} &copy; TechnoBlog - All Rights
        Reserved. Jerry Masola.
      </p>
    </footer>
  );
};

export default Footer;
