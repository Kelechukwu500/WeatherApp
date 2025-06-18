import React from 'react'

const WeatherRadar = () => {
  return (
    <>
      <div className="mt-10 px-6">
        <h1 className="text-2xl font-bold text-center mb-4">Weather Radar</h1>
        <div className="flex justify-center">
          <iframe
            title="Weather Radar"
            src="https://www.rainviewer.com/map.html?loc=40.71,-74.01,5&oFa=0&oC=0&oU=0&oCS=0&oF=0&oAP=0&c=0&o=83&lm=1&layer=radar"
            width="100%"
            height="450"
            style={{
              border: 0,
              borderRadius: "16px",
              maxWidth: "900px",
              minWidth: "320px",
            }}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default WeatherRadar