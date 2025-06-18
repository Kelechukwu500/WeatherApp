import React from "react";
import LoadingSpinner from "./LoadingSpinner";

const AboutFeatures = () => (
  <div className="about-page w-full max-w-full px-4 py-6 sm:px-6 md:px-8 min-h-screen bg-gray-100 dark:bg-gray-900">
    <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">
      About This Weather App
    </h1>

    <p className="mb-4 text-gray-700 dark:text-gray-300">
      This dynamic weather web app provides accurate and up-to-date weather
      forecasts for cities around the world. You can view a 7-day forecast, live
      weather radar, and save your favorite locations for quick access.
    </p>

    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
      Features
    </h2>

    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
      <li>7-day weather forecast with temperature trends</li>
      <li>Live weather radar visualization</li>
      <li>Save and manage favorite locations</li>
      <li>Switch between Celsius and Fahrenheit</li>
      <li>Search for cities worldwide</li>
      <li>Real-time weather updates</li>
      <li>Interactive temperature graph</li>
      <li>
        Detailed weather information (humidity, wind speed, sunrise & sunset
        etc.)
      </li>
      <li>Background weather condition of cities</li>
      <li>Modern, responsive design</li>
    </ul>

    <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
      Technologies Used
    </h2>

    <ul className="list-disc list-inside mb-4 text-gray-700 dark:text-gray-300">
      <li>React</li>
      <li>React Router</li>
      <li>Redux (for state management)</li>
      <li>Chart.js (for temperature graph)</li>
      <li>Axios (for API calls)</li>
      <li>React Icons (for icons)</li>
      <li>Tailwind CSS</li>
      <li>Weather API (for real-time data, if applicable)</li>
    </ul>

    <p className="text-gray-600 dark:text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Dynamic Weather App. Built for learning
      and use by Kelechukwu Ifeanyichukwu Aku.
    </p>
  </div>
);

export default AboutFeatures;
