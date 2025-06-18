import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastRadar from "./ForecastRadar";
import LoadingSpinner from "./LoadingSpinner";
import AlertBanner from "./AlertBanner";
import WindDirectionCompass from "./WindDirectionCompass";
import sunnyimage from "../assets/sunny.jpg";
import rainimage from "../assets/rain.jpg";
import cloudimage from "../assets/cloud.jpg";
import snowimage from "../assets/snow.jpg";

const API_KEY = "312427829dfb46f0be0124156251505";
const BASE_URL = "https://api.weatherapi.com/v1";

const ForecastFeatures = () => {
  const [forecastDays, setForecastDays] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [city, setCity] = useState("New York");
  const [searchInput, setSearchInput] = useState("New York");
  const [isCelsius, setIsCelsius] = useState(true);
  const [currentCondition, setCurrentCondition] = useState(null);
  const [windDir, setWindDir] = useState("N");
  const [windSpeed, setWindSpeed] = useState(0);

  useEffect(() => {
    const fetchForecast = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7&alerts=yes`
        );

        const days = response.data.forecast.forecastday.map((d) => ({
          date: d.date,
          day: new Date(d.date).toLocaleDateString(undefined, {
            weekday: "long",
          }),
          condition: d.day.condition.text,
          maxTemp: d.day.maxtemp_c,
          minTemp: d.day.mintemp_c,
          icon: d.day.condition.icon,
          description: d.day.condition.text,
          humidity: d.day.avghumidity,
          wind: d.day.maxwind_kph,
          rainChance: d.day.daily_chance_of_rain,
          uv: d.day.uv,
        }));

        setForecastDays(days);
        setAlerts(response.data.alerts?.alert || []);
        setCurrentCondition(response.data.current.condition);
        setWindDir(response.data.current.wind_dir);
        setWindSpeed(response.data.current.wind_kph);
      } catch (error) {
        setForecastDays([]);
        setAlerts([]);
        setCurrentCondition(null);
        setWindDir("N");
        setWindSpeed(0);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city]);

  const getUvLevel = (uv) => {
    if (uv < 3) return { color: "bg-green-400", tip: "Low: Minimal risk." };
    if (uv < 6)
      return { color: "bg-yellow-400", tip: "Moderate: Wear sunglasses." };
    if (uv < 8)
      return { color: "bg-orange-400", tip: "High: Use SPF 30+ sunscreen." };
    if (uv < 11)
      return { color: "bg-red-400", tip: "Very High: Avoid midday sun." };
    return {
      color: "bg-purple-400",
      tip: "Extreme: Stay indoors if possible.",
    };
  };

  const formatDate = (dateStr) => {
    const options = { month: "short", day: "numeric", year: "numeric" };
    return new Date(dateStr).toLocaleDateString(undefined, options);
  };

  const toF = (c) => Math.round((c * 9) / 5 + 32);

  const maxTemps = forecastDays.map((d) =>
    isCelsius ? d.maxTemp : toF(d.maxTemp)
  );
  const minTemps = forecastDays.map((d) =>
    isCelsius ? d.minTemp : toF(d.minTemp)
  );
  const tempMin = Math.min(...minTemps, 0) - 2;
  const tempMax = Math.max(...maxTemps, 0) + 2;

  const width = 300;
  const height = 80;
  const padding = 30;
  const pointGap =
    forecastDays.length > 1
      ? (width - 2 * padding) / (forecastDays.length - 1)
      : 0;
  const tempToY = (temp) =>
    height -
    padding -
    ((temp - tempMin) / (tempMax - tempMin)) * (height - 2 * padding);

  const maxPoints = maxTemps.map(
    (t, i) => `${padding + i * pointGap},${tempToY(t)}`
  );
  const minPoints = minTemps.map(
    (t, i) => `${padding + i * pointGap},${tempToY(t)}`
  );

  const handleSearch = (e) => {
    e.preventDefault();
    setCity(searchInput.trim() ? searchInput : "New York");
  };

  const getBackgroundStyle = (condition) => {
    if (!condition) return {};
    const text = condition.text.toLowerCase();
    if (text.includes("clear") || text.includes("sunny"))
      return { backgroundImage: `url(${sunnyimage})` };
    if (text.includes("rain")) return { backgroundImage: `url(${rainimage})` };
    if (text.includes("cloud"))
      return { backgroundImage: `url(${cloudimage})` };
    if (text.includes("snow")) return { backgroundImage: `url(${snowimage})` };
    return {};
  };

  return (
    <div className="w-screen max-w-full px-4 py-6 sm:px-6 md:px-24 min-h-screen bg-dark cyan-100 dark:bg-gray-900 relative overflow-hidden">
      <div
        className="absolute inset-0 brightness-75 bg-cover bg-center"
        style={getBackgroundStyle(currentCondition)}
        aria-hidden="true"
      />

      <div className="relative z-10 forecast-page w-full p-6 max-w-7xl mx-auto">
        <div className="absolute top-6 right-6 z-20">
          <WindDirectionCompass windDir={windDir} windSpeed={windSpeed} />
        </div>

        <h1 className="text-3xl font-bold mb-6 text-center text-white">
          3-Day Forecast for {city}
        </h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-center text-white">
            Live Weather Radar
          </h2>
          <ForecastRadar />
        </div>

        <form
          className="flex flex-wrap justify-center mb-4 gap-2"
          onSubmit={handleSearch}
          autoComplete="off"
        >
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Enter city"
            className="px-3 py-1 border rounded"
          />
          <button
            type="submit"
            className="px-3 py-1 border bg-blue-500 text-white rounded"
          >
            Search
          </button>
          <button
            type="button"
            className={`px-3 py-1 border rounded-l ${
              isCelsius
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500"
            }`}
            onClick={() => setIsCelsius(true)}
          >
            °C
          </button>
          <button
            type="button"
            className={`px-3 py-1 border rounded-r ${
              !isCelsius
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500 border-blue-500"
            }`}
            onClick={() => setIsCelsius(false)}
          >
            °F
          </button>
        </form>

        <AlertBanner alerts={alerts} />

        {loading ? (
          <div className="flex justify-center my-8">
            <LoadingSpinner />
          </div>
        ) : (
          <>
            <div className="w-full overflow-x-auto mb-8">
              <svg
                width={width}
                height={height}
                className="bg-white bg-opacity-10 rounded-lg mx-auto"
                style={{ minWidth: width }}
              >
                <polyline
                  fill="none"
                  stroke="#f87171"
                  strokeWidth="2"
                  points={maxPoints.join(" ")}
                />
                <polyline
                  fill="none"
                  stroke="#60a5fa"
                  strokeWidth="2"
                  points={minPoints.join(" ")}
                />
                {maxTemps.map((t, i) => (
                  <circle
                    key={`max-${i}`}
                    cx={padding + i * pointGap}
                    cy={tempToY(t)}
                    r="3"
                    fill="#f87171"
                  />
                ))}
                {minTemps.map((t, i) => (
                  <circle
                    key={`min-${i}`}
                    cx={padding + i * pointGap}
                    cy={tempToY(t)}
                    r="3"
                    fill="#60a5fa"
                  />
                ))}
                {forecastDays.map((d, i) => (
                  <text
                    key={`label-${i}`}
                    x={padding + i * pointGap}
                    y={height - 8}
                    textAnchor="middle"
                    fontSize="10"
                    fill="#f9fafb"
                  >
                    {d.day.slice(0, 3)}
                  </text>
                ))}
              </svg>
            </div>

            {/* Horizontal Forecast + UV Cards */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 w-full">
              {forecastDays.map((day, index) => {
                const uvInfo = getUvLevel(day.uv);
                return (
                  <div
                    key={index}
                    className="flex flex-row gap-2 items-start bg-white bg-opacity-20 p-2 rounded-lg"
                  >
                    {/* Forecast Card */}
                    <div className="bg-white bg-opacity-30 backdrop-blur-md rounded-lg p-4 text-center w-[180px] min-h-[300px] text-gray-900">
                      <h2 className="font-semibold mb-1">{day.day}</h2>
                      <p className="text-xs mb-2">{formatDate(day.date)}</p>
                      <img
                        src={day.icon}
                        alt={day.condition}
                        className="mx-auto mb-2"
                        width={64}
                        height={64}
                      />
                      <p className="mb-2">{day.condition}</p>
                      <div className="text-xs flex flex-col gap-1">
                        <span>💧 Humidity: {day.humidity}%</span>
                        <span>💨 Wind: {day.wind} km/h</span>
                        <span>🌧️ Rain: {day.rainChance}%</span>
                      </div>
                      <p className="mt-2 font-bold">
                        {isCelsius
                          ? `${day.maxTemp}°C / ${day.minTemp}°C`
                          : `${toF(day.maxTemp)}°F / ${toF(day.minTemp)}°F`}
                      </p>
                    </div>

                    {/* UV Index Card */}
                    <div
                      className={`${uvInfo.color} bg-opacity-80 rounded-lg p-4 text-center w-[160px] min-h-[300px] flex flex-col justify-center`}
                    >
                      <h3 className="font-semibold mb-1 text-white text-lg">
                        UV Index
                      </h3>
                      <div className="text-4xl font-bold text-white mb-2">
                        {day.uv}
                      </div>
                      <div className="text-sm text-white">{uvInfo.tip}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ForecastFeatures;
