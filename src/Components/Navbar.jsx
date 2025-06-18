import React from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex items-center justify-between relative">
      {/* Left Section: Menu + Logo */}
      <div className="flex items-center space-x-4">
        <span className="text-white focus:outline-none">
          <FiMenu size={24} />
        </span>
        <h1 className="text-xl font-semibold">WeatherApp</h1>
      </div>

      {/* Center Section: Main Nav Links */}
      <div className="hidden md:flex items-center space-x-6 absolute left-1/2 transform -translate-x-1/2">
        <Link to="/" className="text-white hover:text-gray-300 transition">
          Home
        </Link>
        <Link
          to="/forecast"
          className="text-white hover:text-gray-300 transition"
        >
          Forecast
        </Link>
        <Link to="/saved" className="text-white hover:text-gray-300 transition">
          Saved
        </Link>
        <Link to="/about" className="text-white hover:text-gray-300 transition">
          About
        </Link>
        <Link
          to="/contact"
          className="text-white hover:text-gray-300 transition"
        >
          Contact
        </Link>
      </div>

      {/* Right Section: Auth Links shifted slightly left */}
      <div className="hidden md:flex items-center space-x-4 mr-10">
        <Link to="/login" className="text-white hover:text-gray-300 transition">
          Login
        </Link>
        <Link
          to="/signup"
          className="text-white hover:text-gray-300 transition"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
