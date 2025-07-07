import React, { useState } from "react";
import { FiMenu, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    const route = query.toLowerCase().trim();
    if (["home", "forecast", "saved", "about", "contact"].includes(route)) {
      navigate(route === "home" ? "/" : `/${route}`);
      setQuery("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSearch();
    }
  };

  return (
    <nav className="w-full bg-gray-800 text-white p-4 flex flex-col md:flex-row items-center justify-between relative gap-4">
      {/* Top Left Section: Logo + Menu */}
      <div className="flex items-center space-x-4">
        <span className="text-white focus:outline-none">
          <FiMenu size={24} />
        </span>
        <h1 className="text-xl font-semibold">WeatherApp</h1>
      </div>

      {/* Search Bar: Visible on all screen sizes */}
      <div className="flex items-center border border-white rounded-md overflow-hidden w-full max-w-md">
        <input
          type="text"
          placeholder="Search page..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress}
          className="px-4 py-1 text-black focus:outline-none w-full"
        />
        <button
          onClick={handleSearch}
          className="bg-white px-3 py-1 flex items-center justify-center text-gray-800 hover:bg-gray-300 transition"
        >
          <FiSearch size={18} />
        </button>
      </div>

      {/* Right Section: Navigation Links */}
      <div className="flex items-center space-x-6">
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
    </nav>
  );
};

export default Navbar;
