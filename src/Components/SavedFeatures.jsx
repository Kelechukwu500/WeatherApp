import React, { useState, useEffect } from "react";
import LoadingSpinner from "./LoadingSpinner";

const demoLocations = [
  { name: "New York", country: "USA", timezone: "America/New_York" },
  { name: "London", country: "UK", timezone: "Europe/London" },
  { name: "Tokyo", country: "Japan", timezone: "Asia/Tokyo" },
  { name: "Sydney", country: "Australia", timezone: "Australia/Sydney" },
  { name: "Paris", country: "France", timezone: "Europe/Paris" },
  { name: "Berlin", country: "Germany", timezone: "Europe/Berlin" },
  {
    name: "Cape Town",
    country: "South Africa",
    timezone: "Africa/Johannesburg",
  },
  { name: "Rio de Janeiro", country: "Brazil", timezone: "America/Sao_Paulo" },
  { name: "Toronto", country: "Canada", timezone: "America/Toronto" },
  { name: "Moscow", country: "Russia", timezone: "Europe/Moscow" },
  { name: "Dubai", country: "UAE", timezone: "Asia/Dubai" },
  { name: "Mumbai", country: "India", timezone: "Asia/Kolkata" },
  { name: "Singapore", country: "Singapore", timezone: "Asia/Singapore" },
  { name: "Bangkok", country: "Thailand", timezone: "Asia/Bangkok" },
  { name: "Istanbul", country: "Turkey", timezone: "Europe/Istanbul" },
  { name: "Seoul", country: "South Korea", timezone: "Asia/Seoul" },
  { name: "Mexico City", country: "Mexico", timezone: "America/Mexico_City" },
  {
    name: "Buenos Aires",
    country: "Argentina",
    timezone: "America/Argentina/Buenos_Aires",
  },
  { name: "Lagos", country: "Nigeria", timezone: "Africa/Lagos" },
  { name: "Cairo", country: "Egypt", timezone: "Africa/Cairo" },
  { name: "Kuala Lumpur", country: "Malaysia", timezone: "Asia/Kuala_Lumpur" },
  { name: "Amsterdam", country: "Netherlands", timezone: "Europe/Amsterdam" },
  { name: "Madrid", country: "Spain", timezone: "Europe/Madrid" },
  { name: "Lisbon", country: "Portugal", timezone: "Europe/Lisbon" },
  { name: "Athens", country: "Greece", timezone: "Europe/Athens" },
  { name: "Hanoi", country: "Vietnam", timezone: "Asia/Bangkok" },
  { name: "Santiago", country: "Chile", timezone: "America/Santiago" },
  { name: "Lima", country: "Peru", timezone: "America/Lima" },
  { name: "Bogotá", country: "Colombia", timezone: "America/Bogota" },
  { name: "Caracas", country: "Venezuela", timezone: "America/Caracas" },
  { name: "Helsinki", country: "Finland", timezone: "Europe/Helsinki" },
  { name: "Oslo", country: "Norway", timezone: "Europe/Oslo" },
  { name: "Stockholm", country: "Sweden", timezone: "Europe/Stockholm" },
  { name: "Copenhagen", country: "Denmark", timezone: "Europe/Copenhagen" },
  { name: "Brussels", country: "Belgium", timezone: "Europe/Brussels" },
  { name: "Zurich", country: "Switzerland", timezone: "Europe/Zurich" },
  { name: "Abuja", country: "Nigeria", timezone: "Africa/Lagos" },
  { name: "Nairobi", country: "Kenya", timezone: "Africa/Nairobi" },
  { name: "Accra", country: "Ghana", timezone: "Africa/Accra" },
  { name: "Kampala", country: "Uganda", timezone: "Africa/Kampala" },
  {
    name: "Dar es Salaam",
    country: "Tanzania",
    timezone: "Africa/Dar_es_Salaam",
  },
  { name: "Addis Ababa", country: "Ethiopia", timezone: "Africa/Addis_Ababa" },
  { name: "Lusaka", country: "Zambia", timezone: "Africa/Lusaka" },
  { name: "Harare", country: "Zimbabwe", timezone: "Africa/Harare" },
  { name: "Maputo", country: "Mozambique", timezone: "Africa/Maputo" },
  { name: "Luanda", country: "Angola", timezone: "Africa/Luanda" },
  {
    name: "Kinshasa",
    country: "Democratic Republic of the Congo",
    timezone: "Africa/Kinshasa",
  },
];

const Saved = ({ savedLocations = demoLocations }) => {
  const [locations, setLocations] = useState(savedLocations);
  const [times, setTimes] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const newTimes = {};
      locations.forEach((loc, idx) => {
        if (loc.timezone) {
          const now = new Date();
          const localTime = now.toLocaleTimeString("en-US", {
            hour: "numeric",
            minute: "2-digit",
            hour12: true,
            timeZone: loc.timezone,
          });
          newTimes[idx] = localTime;
        } else {
          newTimes[idx] = "Unknown";
        }
      });
      setTimes(newTimes);
    }, 1000);
    return () => clearInterval(interval);
  }, [locations]);

  const removeLocation = (index) => {
    setLocations((prev) => prev.filter((_, i) => i !== index));
  };

  const addLocation = () => {
    const name = prompt("Enter the city name:");
    if (!name || !name.trim()) return alert("City name is required.");
    const country = prompt("Enter the country name:");
    if (!country || !country.trim()) return alert("Country name is required.");
    const timezone = prompt(
      "Enter the timezone (e.g. America/New_York):\nSee https://en.wikipedia.org/wiki/List_of_tz_database_time_zones"
    );
    if (!timezone || !timezone.trim()) return alert("Timezone is required.");

    if (
      locations.some(
        (loc) =>
          loc.name.toLowerCase() === name.trim().toLowerCase() &&
          loc.country.toLowerCase() === country.trim().toLowerCase()
      )
    ) {
      return alert("This location is already saved.");
    }

    setLocations((prev) => [
      ...prev,
      { name: name.trim(), country: country.trim(), timezone: timezone.trim() },
    ]);
  };

  const filteredLocations = locations.filter(
    (loc) =>
      loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loc.country.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="saved-page w-screen w-full max-w-full px-4 py-6 sm:px-6 md:px-8 min-h-screen bg-gray-100 dark:bg-gray-900 px-4">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-900 dark:text-white drop-shadow-md">
        Saved Locations
      </h1>

      <div className="flex justify-center mb-6 gap-4 flex-wrap">
        <button
          onClick={addLocation}
          className="px-5 py-2 rounded-full bg-green-500 text-white font-semibold shadow-lg hover:bg-green-600 active:scale-95 transition-transform"
        >
          + Add New Location
        </button>

        <input
          type="text"
          placeholder="Search by city or country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="px-4 py-2 rounded-full w-60 max-w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        />
      </div>

      {filteredLocations.length === 0 ? (
        <div className="flex-grow flex items-center justify-center h-48">
          <p className="text-center text-gray-600 dark:text-gray-300 text-lg italic">
            No matching locations found.
          </p>
        </div>
      ) : (
        <ul className="flex flex-wrap justify-center gap-6">
          {filteredLocations.map((loc, idx) => {
            const originalIndex = locations.findIndex(
              (l) => l.name === loc.name && l.country === loc.country
            );
            return (
              <li
                key={`${loc.name}-${loc.country}`}
                className="relative w-44 p-5 bg-gray-200 dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col items-center text-center"
              >
                <button
                  onClick={() => removeLocation(originalIndex)}
                  aria-label={`Remove ${loc.name}`}
                  className="absolute top-3 right-3 w-7 h-7 rounded-full bg-red-600 text-white text-lg flex items-center justify-center hover:bg-red-700 active:scale-90 transition-transform"
                >
                  &times;
                </button>

                <span className="font-semibold text-xl text-gray-800 dark:text-gray-100 mb-1">
                  {loc.name}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-300 mb-1">
                  {loc.country}
                </span>
                <span className="text-sm text-gray-700 dark:text-gray-200 font-mono">
                  {times[originalIndex] || "Loading..."}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Saved;
