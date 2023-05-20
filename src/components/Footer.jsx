import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div
      className={`text-center rounded-md mx-auto w-[90%] shadow-lg shadow-orange-300 p-4 mb-5 transition ease-in-out duration-150 cursor-pointer ${
        isDarkMode ? "bg-black text-gray-300" : "bg-orange-100"
      }`}
    >
      <p className="text-md">
        If you have time, you should read more about this incredible human being
        on his {" "}
        <a
          className={`underline ${
            isDarkMode
              ? "text-red-400 hover:text-orange-800 active:text-orange-600"
              : ""
          }`}
          href="https://en.wikipedia.org/wiki/Norman_Borlaug"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wikipedia entry
        </a>
      </p>
    </div>
  );
};

export default Footer;
