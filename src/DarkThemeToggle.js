import React, { useState, useEffect } from "react";
import "./App.css";

const DarkThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  useEffect(() => {
    document.body.className = darkMode ? "dark-theme" : "light-theme";
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        width: "50px",
        height: "50px",
        borderRadius: "50%",
        cursor: "pointer",
        border: "none",
        background: darkMode ? "#333" : "#ddd",
        color: darkMode ? "#fff" : "#000",
        fontSize: "22px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
};

export default DarkThemeToggle;
