import { useState, useEffect } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(true); // Dark mode is default

  useEffect(() => {
    document.documentElement.classList.add("dark"); // Apply dark mode by default
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-100 dark:bg-gray-900 shadow-md p-4 flex justify-between items-center z-50">
      <div className="text-xl font-bold text-gray-900 dark:text-white">
        <a href="#home" className="text-gray-700 dark:text-gray-300">Anush Nandyala</a> 
      </div>
      <div className="space-x-4 flex items-center">
        <a href="#home" className="text-gray-700 dark:text-gray-300">Home</a>
        <a href="#resume" className="text-gray-700 dark:text-gray-300">Resume</a>
        <a href="#projects" className="text-gray-700 dark:text-gray-300">Projects</a> {/* Renamed */}
        <a href="#contact" className="text-gray-700 dark:text-gray-300">Contact</a>

        {/* Dark Mode Toggle Switch */}
        <div className="flex items-center space-x-2">
          {/* Sun Icon (Left) */}
          <FaSun className="text-yellow-500" />

          <button
            onClick={toggleDarkMode}
            className="relative w-12 h-6 flex items-center bg-gray-300 dark:bg-gray-700 rounded-full p-1 transition duration-300"
          >
            <div
              className={`absolute bg-white w-5 h-5 rounded-full transition-transform duration-300 ${
                isDarkMode ? "translate-x-6" : "translate-x-0"
              }`}
            ></div>
          </button>

          {/* Moon Icon (Right) */}
          <FaMoon className="text-gray-400 dark:text-white" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

