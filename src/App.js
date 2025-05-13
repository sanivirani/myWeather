import { useState } from "react";
import WeatherInput from "./components/WeatherInput";
import WeatherDisplay from "./components/WeatherDisplay";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const fetchWeather = async () => {
    if (!city.trim()) return;
    setError("");
    setWeather(null);
    setIsLoading(true);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
      );
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        setError("City not found");
      }
    } catch {
      setError("Error fetching data");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center px-4 py-10">
      <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
        🌦 Weather App
      </h1>
      <WeatherInput
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
        isLoading={isLoading}
      />
      {error && <p className="text-red-600 mb-4">{error}</p>}
      {weather && <WeatherDisplay weather={weather} />}
    </div>
  );
};

export default App;
