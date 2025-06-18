import React from "react";
import ContactForm from "./ContactForm";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactFeatures = () => {
  return (
    <div className="min-h-screen px-4 py-10 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-3xl text-center font-bold text-purple-700 dark:text-white mb-8">
        Contact Developer
      </h1>

      {/* Horizontal cards container */}
      <div className="w-full max-w-full overflow-x-auto">
        <div className="flex space-x-6 px-2">
          {/* Developer Info Card */}
          <div className="flex-shrink-0 w-72 bg-purple-100 dark:bg-cyan-900 rounded-2xl shadow-lg p-6 space-y-6">
            <div className="text-center">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                Kelechukwu Ifeanyichukwu Aku
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Frontend Developer | Weather Web App Creator
              </p>
            </div>
          </div>

          {/* Contact Details Card */}
          <div className="flex-shrink-0 w-72 bg-blue-100 dark:bg-cyan-900 rounded-2xl shadow-lg p-6 space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-purple-700 dark:text-purple-400 font-semibold">
                📧 Email:
              </span>
              <span className="text-gray-800 dark:text-gray-200">
                kelechukwu508@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-purple-700 dark:text-purple-400 font-semibold">
                📞 Phone:
              </span>
              <span className="text-gray-800 dark:text-gray-200">
                +234 7039422404
              </span>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="flex-shrink-0 w-72 bg-green-100 dark:bg-cyan-900 rounded-2xl shadow-lg p-6 flex flex-col items-center space-y-4">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              Social Links
            </h3>
            <div className="flex justify-center space-x-6 text-2xl">
              <a
                href="https://facebook.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600"
                title="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
                title="Twitter"
              >
                <FaTwitter />
              </a>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500"
                title="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700"
                title="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Map Preview Card */}
          <div className="flex-shrink-0 w-96 bg-yellow-100 dark:bg-cyan-900 rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              📍 Location Preview
            </h3>
            <div className="rounded-md overflow-hidden">
              <iframe
                title="Kelechukwu's Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.7224989548985!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8d796b17b8a5%3A0xfdf3953cf71b6576!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1653229835890!5m2!1sen!2sng"
                width="100%"
                height="200"
                allowFullScreen=""
                loading="lazy"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Centered & Compact Contact Form */}
      <div className="flex justify-center items-center mt-12">
        <div className="w-full max-w-sm bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-3 text-center">
            Send a Message
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFeatures;
