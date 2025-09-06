import React, { useState, useEffect } from "react";

const DarkThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`fixed bottom-5 right-5 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-xl transition-colors ${
        darkMode
          ? "bg-gray-800 text-yellow-300 hover:bg-gray-700"
          : "bg-gray-200 text-gray-900 hover:bg-gray-300"
      }`}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkThemeToggle;
