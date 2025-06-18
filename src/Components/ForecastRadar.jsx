import React from "react";

const ForecastRadar = () => {
  // Example: Embed a public weather radar map (Windy.com widget)
  return (
    <div className="max-w-7xl mx-auto flex justify-center my-8">
      <iframe
        title="Weather Radar"
        width="650"
        height="450"
        src="https://embed.windy.com/embed2.html?lat=20&lon=78&zoom=4&level=surface&overlay=radar&menu=&message=true"
        frameBorder="0"
        allowFullScreen
        style={{ borderRadius: "12px", border: "none" }}
      ></iframe>
    </div>
  );
};

export default ForecastRadar;
