import React from "react";

const WeatherInput = ({ city, setCity, fetchWeather }) => (
  <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
    <input
      type="text"
      value={city}
      onChange={(e) => setCity(e.target.value)}
      placeholder="Enter city"
      className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 w-64"
    />
    <button
      onClick={fetchWeather}
      className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-all"
    >
      Get Weather
    </button>
  </div>
);

export default WeatherInput;
