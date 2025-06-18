import React from "react";

const LoadingSpinner = () => (
  <div className="flex justify-center items-center h-full py-8">
    <div className="animate-spin rounded-full h-10 w-10 border-4 border-blue-500 border-t-transparent"></div>
  </div>
);

export default LoadingSpinner;
