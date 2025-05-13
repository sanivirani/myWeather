const WeatherInput = ({ city, setCity, fetchWeather, isLoading }) => (
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
      disabled={isLoading}
      className={`px-6 py-2 rounded-lg text-white transition-all ${
        isLoading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {isLoading ? "Loading..." : "Get Weather"}
    </button>
  </div>
);

export default WeatherInput;
