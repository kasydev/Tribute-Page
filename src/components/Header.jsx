import React from "react";

const Header = ({ isDarkMode }) => {
  return (
    <div
      className={`shadow-lg shadow-orange-200 rounded-lg transition duration-150 ease-in-out text-center mt-6 p-4 mb-5 ${
        isDarkMode ? "bg-black" : "bg-orange-100"
      } w-[90%] mx-auto  whitespace-nowrap`}
    >
      <h1
        className={`font-semibold font-serif text-2xl md:text-3xl mb-5 transition ease-in-out duration-150 mt-3 ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        Dr. Norman Borlaug
      </h1>
      <p
        className={`transition duration-150 ease-in-out mb-3 text-md ${
          isDarkMode ? "text-gray-300" : ""
        }`}
      >
        The man who saved a billion lives.
      </p>
    </div>
  );
};

export default Header;
