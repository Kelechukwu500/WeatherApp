import React from "react";

const directionToDegrees = {
  N: 0,
  NNE: 22.5,
  NE: 45,
  ENE: 67.5,
  E: 90,
  ESE: 112.5,
  SE: 135,
  SSE: 157.5,
  S: 180,
  SSW: 202.5,
  SW: 225,
  WSW: 247.5,
  W: 270,
  WNW: 292.5,
  NW: 315,
  NNW: 337.5,
};

const WindDirectionCompass = ({ windDir = "N", windSpeed = 0 }) => {
  const rotation = directionToDegrees[windDir] || 0;

  return (
    <div className="bg-dark-cyan-100 p-3 rounded shadow-lg text-white">
      {/* Compass Circle */}
      <div className="relative w-24 h-24 rounded-full border-4 border-blue-400 flex items-center justify-center mx-auto mb-3">
        <div
          className="absolute w-1 h-10 bg-blue-600 rounded origin-bottom transition-transform duration-500 ease-in-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        />
        <span className="absolute top-1 text-xs font-semibold">N</span>
        <span className="absolute bottom-1 text-xs font-semibold">S</span>
        <span className="absolute left-1 text-xs font-semibold">W</span>
        <span className="absolute right-1 text-xs font-semibold">E</span>
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-lg font-semibold mb-1">Wind Direction</h3>
        <p className="text-sm mb-1">
          <span className="font-medium">Direction:</span> {windDir}
        </p>
        <p className="text-sm">
          <span className="font-medium">Speed:</span> {windSpeed} km/h
        </p>
      </div>
    </div>
  );
};

export default WindDirectionCompass;
