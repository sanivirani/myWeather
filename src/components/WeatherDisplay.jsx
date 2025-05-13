import React from "react";

const WeatherDisplay = ({ weather }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md mx-auto">
    <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
    <p className="capitalize text-gray-600 mb-2">
      {weather.weather[0].description}
    </p>
    <p className="text-xl font-medium">🌡 Temperature: {weather.main.temp} °C</p>
    <p className="text-gray-700">💧 Humidity: {weather.main.humidity}%</p>
    <p className="text-gray-700">🌬 Wind Speed: {weather.wind.speed} m/s</p>
  </div>
);

export default WeatherDisplay;
