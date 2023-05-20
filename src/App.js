import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { FiSun } from "react-icons/fi";
import { BsFillMoonFill } from "react-icons/bs";
import "./App.css";

function App() {
  const [isDayMode, setDayMode] = useState(true);
  const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve mode from localStorage on app load
    const storedMode = localStorage.getItem("mode");
    if (storedMode === "dark") {
      setDayMode(false);
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Save mode to localStorage whenever it changes
    if (isDarkMode) {
      localStorage.setItem("mode", "dark");
    } else {
      localStorage.setItem("mode", "day");
    }
  }, [isDarkMode]);

  const onDay = () => {
    setDayMode(true);
    setDarkMode(false);
  };

  const onDark = () => {
    setDayMode(false);
    setDarkMode(true);
  };

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "day-mode"}`}>
      <Header isDarkMode={isDarkMode} />
      <div className="mb-4 relative w-[27%] md:w-[8%] sm:w-[20%] items-center mx-auto">
        <span className="absolute cursor-pointer left-20 transition duration-150 ease-in-out">
          <FiSun onClick={onDay} />
        </span>
        <span className="cursor-pointer transition duration-150 ease-in-out">
          <BsFillMoonFill onClick={onDark} />
        </span>
      </div>
      <Body isDarkMode={isDarkMode} />
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
