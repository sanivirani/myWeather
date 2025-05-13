# My Weather App

A simple weather application built with React and Tailwind CSS.

## Features

- Search weather by city
- Displays temperature, description, humidity, and wind speed
- Styled using Tailwind CSS
- Error handling for invalid city names or fetch failures

## Setup Instructions

1. Clone the repo:

```bash
git clone https://github.com/sanivirani/myWeather.git
cd myWeather
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env` file in the root directory:

```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the app:

```bash
npm start
```

Visit `http://localhost:3000` to use the app.

## Folder Structure

```
src/
├── components/
│   ├── WeatherInput.js
│   └── WeatherDisplay.js
├── App.js
├── index.js
└── index.css
```

## License

MIT
