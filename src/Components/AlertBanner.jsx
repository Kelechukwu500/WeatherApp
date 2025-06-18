import React from "react";

const AlertBanner = ({ alerts }) => {
  if (!alerts || alerts.length === 0) return null;

  return (
    <div className="w-full flex flex-col gap-6 mb-6">
      {alerts.map((alert, index) => (
        <div
          key={index}
          className="w-full bg-white dark:bg-gray-800 border border-yellow-300 rounded-xl shadow-lg p-4"
        >
          <div className="flex items-start gap-4 text-yellow-900 dark:text-yellow-200">
            <div className="text-2xl">⚠️</div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{alert.headline}</h3>
              <p className="text-sm">{alert.desc}</p>
              {alert.instruction && (
                <p className="mt-2 text-sm italic text-yellow-800 dark:text-yellow-300">
                  {alert.instruction}
                </p>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlertBanner;
