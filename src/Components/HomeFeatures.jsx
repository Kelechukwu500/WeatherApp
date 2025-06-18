import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsCloud } from "react-icons/bs";
import { FaLocationDot, FaWind } from "react-icons/fa6";
import { BiSearch } from "react-icons/bi";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import sunnyimage from "../assets/sunny.jpg";
import rainimage from "../assets/rain.jpg";
import cloudimage from "../assets/cloud.jpg";
import snowimage from "../assets/snow.jpg";
import WeatherRadar from "./WeatherRadar";




const API_KEY = "312427829dfb46f0be0124156251505";
const BASE_URL = "https://api.weatherapi.com/v1";

const HomeFeatures = () => {
  const [city, setCity] = useState("New York");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (searchCity) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `${BASE_URL}/forecast.json?key=${API_KEY}&q=${searchCity}&days=3`
      );
      setWeather(response.data);
      toast.success(`Weather updated for ${response.data.location.name}`);
    } catch (error) {
      toast.error("City not found. Try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
  }, []);

  const handleSearch = () => {
    if (city.trim() !== "") {
      fetchWeather(city);
    } else {
      toast.warning("Please enter a city name.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const current = weather?.current;
  const location = weather?.location;
  const forecastHours = weather?.forecast?.forecastday[0]?.hour.slice(0, 5);
  const forecastDays = weather?.forecast?.forecastday;

  const weatherCondition = current?.condition?.text?.toLowerCase();
  let backgroundimage = sunnyimage;

  if (weatherCondition) {
    if (
      weatherCondition.includes("sunny") ||
      weatherCondition.includes("clear")
    ) {
      backgroundimage = sunnyimage;
    } else if (weatherCondition.includes("rain")) {
      backgroundimage = rainimage;
    } else if (weatherCondition.includes("snow")) {
      backgroundimage = snowimage;
    } else if (
      weatherCondition.includes("cloud") ||
      weatherCondition.includes("overcast")
    ) {
      backgroundimage = cloudimage;
    }
  }

  return (
    <div
      className="w-screen min-h-screen w-full"
      style={{
        backgroundImage: `url(${backgroundimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 0.5s ease-in-out",
        color: "#fff",
      }}
    >
      <ToastContainer position="top-center" autoClose={3000} theme="colored" />

    
      <div className="flex flex-col md:flex-row justify-between items-start gap-6 p-6">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h3 className="text-2xl font-semibold">
            {location?.name} - {location?.country}
          </h3>
          <h1 className="text-4xl font-bold mt-2">
            {current?.condition?.text}
          </h1>

      
          {current && (
            <p className="mt-2 text-lg">
              <span className="font-semibold">Humidity:</span>{" "}
              {current.humidity}%
            </p>
          )}
        </div>

        <div className="flex flex-row flex-wrap gap-4 justify-center md:justify-start w-full md:w-1/2">
          {forecastHours?.map((hour, index) => (
            <motion.div
              key={index}
              className="bg-white/30 rounded-xl p-4 backdrop-blur-md text-black text-center shadow-md w-24"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="font-medium text-sm">
                {new Date(hour.time).toLocaleTimeString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
              <img src={hour.condition.icon} alt="icon" className="mx-auto" />
              <h2 className="text-lg font-semibold">
                {Math.round(hour.temp_c)}℃
              </h2>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search + Temp Info */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 gap-6">
        <div className="flex items-center bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg text-black w-full md:w-1/2">
          <FaLocationDot className="text-xl mr-2 text-white" />
          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-200"
            placeholder="Enter city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <BiSearch
            className="text-xl cursor-pointer text-white"
            onClick={handleSearch}
          />
        </div>

        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-white text-center"
          >
            Loading weather data...
          </motion.p>
        )}

        {current && (
          <motion.div
            className="bg-white/30 backdrop-blur-md text-black p-4 rounded-lg shadow-md text-center w-full md:w-1/3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-3xl font-bold">
              {Math.round(current.temp_c)}℃
            </h1>
            <p className="mt-2 flex items-center justify-center gap-2">
              <FaWind className="text-sm" />
              {current.wind_dir} {current.wind_kph} km/h
            </p>
          </motion.div>
        )}
      </div>

      
      <div className="mt-10 px-6">
        <h1 className="text-2xl font-bold text-center mb-4">
          The Next Days Forecast
        </h1>
        <div className="flex flex-row overflow-x-auto gap-6 pb-4">
          {forecastDays?.map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[220px] bg-white/30 backdrop-blur-md text-black rounded-xl p-4 shadow-md flex-shrink-0"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center gap-2" />
              <img
                src={item.day.condition.icon}
                alt="icon"
                className="w-12 h-12"
              />
              <h2 className="text-md font-bold text-center">
                {new Date(item.date).toLocaleDateString("en-GB", {
                  weekday: "long",
                  day: "numeric",
                  month: "long",
                })}
              </h2>
              <p className="text-sm">{item.day.condition.text}</p>
              <div className="flex justify-between gap-2 text-sm font-semibold mt-2">
                <span>{Math.round(item.day.maxtemp_c)}℃</span>
                <span>{Math.round(item.day.mintemp_c)}℃</span>
              </div>

              
              <div className="mt-2 text-xs text-black">
                <div>
                  <span className="font-semibold">Sunrise:</span>{" "}
                  {item.astro.sunrise}
                </div>
                <div>
                  <span className="font-semibold">Sunset:</span>{" "}
                  {item.astro.sunset}
                </div>
              </div>
              <WeatherRadar />
            
            </motion.div>
            
            
          ))}
        </div>
      </div>

      
    </div>
      

      
  );
};

export default HomeFeatures;
