import React from "react";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full px-3 py-2 border rounded dark:bg-gray-700 dark:text-white flex items-center justify-between">
      {/* Left: WhatsApp */}
      <a
        href="https://api.whatsapp.com/send?phone=2347039422404&text=Hello%2C%20I%20love%20your%20weather%20app!"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-green-500 hover:text-green-600 font-semibold"
      >
        <FaWhatsapp size={20} />
        WhatsApp
      </a>

      {/* Center: Copyright */}
      <span className="text-sm text-center mx-auto">
        &copy; {new Date().getFullYear()} TrueWeather. Created by Kaycee Tech.

      </span>

      {/* Right: Back to Top */}
      <button
        onClick={scrollToTop}
        className="flex items-center gap-1 text-blue-500 hover:text-blue-600 font-medium"
      >
        <FaArrowUp size={16} />
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
