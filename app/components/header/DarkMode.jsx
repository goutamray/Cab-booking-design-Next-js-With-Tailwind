
"use client";

import { useEffect, useState } from "react";
import { IoIosSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Check if window is available
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) {
        setTheme(savedTheme);
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const element = document.documentElement;
      localStorage.setItem("theme", theme);
      if (theme === "dark") {
        element.classList.add("dark");
      } else {
        element.classList.remove("dark");
      }
    }
  }, [theme]);

  return (
    <div>
      {theme === "dark" ? (
        <IoIosSunny onClick={() => setTheme("light")} className="text-2xl" />
      ) : (
        <IoMdMoon onClick={() => setTheme("dark")} className="text-2xl" />
      )}
    </div>
  );
};

export default DarkMode;









