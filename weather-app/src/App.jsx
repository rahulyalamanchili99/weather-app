import { useEffect, useState, lazy, Suspense } from "react";

import SearchBar from "./components/SearchBar";
import VoiceSearch from "./components/VoiceSearch";
import WeatherCard from "./components/WeatherCard";
import WeatherDetails from "./components/WeatherDetails";
import Forecast from "./components/Forecast";
import HourlyForecast from "./components/HourlyForecast";
import AirQuality from "./components/AirQuality";
import FavoriteCities from "./components/FavoriteCities";
import SunCard from "./components/SunCard";
import WeatherAssistant from "./components/WeatherAssistant";

import { getBackground } from "./utils/background";

import {
  getWeatherByCity,
  getWeatherByCoords,
  getForecastByCity,
  getForecastByCoords,
  getAirQuality,
} from "./services/weatherService";

import "./App.css";

const MapView = lazy(() => import("./components/MapView"));
const WeatherCharts = lazy(() => import("./components/WeatherCharts"));
const Settings = lazy(() => import("./components/Settings"));

function App() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [air, setAir] = useState(null);
  const [background, setBackground] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  // Favorite Cities
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favoriteCities");
    return saved ? JSON.parse(saved) : [];
  });

  // Save favorites
  useEffect(() => {
    localStorage.setItem(
      "favoriteCities",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Search Weather
  const searchWeather = async (city) => {
    try {
      const weatherData = await getWeatherByCity(city);
      const forecastData = await getForecastByCity(city);

      if (!weatherData) {
        alert("City not found");
        return;
      }

      const airData = await getAirQuality(
        weatherData.coord.lat,
        weatherData.coord.lon
      );

      setWeather(weatherData);
      setForecast(forecastData);
      setAir(airData);

      setBackground(
        getBackground(
          weatherData.weather[0].main,
          weatherData.weather[0].icon
        )
      );
    } catch (error) {
      console.error(error);
      alert("Something went wrong while fetching weather.");
    }
  };

  // Current Location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          const weatherData = await getWeatherByCoords(lat, lon);
          const forecastData = await getForecastByCoords(lat, lon);
          const airData = await getAirQuality(lat, lon);

          if (!weatherData) return;

          setWeather(weatherData);
          setForecast(forecastData);
          setAir(airData);

          setBackground(
            getBackground(
              weatherData.weather[0].main,
              weatherData.weather[0].icon
            )
          );
        } catch (error) {
          console.error(error);
          alert("Unable to fetch weather.");
        }
      },
      () => {
        alert("Location permission denied.");
      }
    );
  };

  // Add Favorite
  const addFavorite = () => {
    if (!weather) return;

    if (!favorites.includes(weather.name)) {
      setFavorites([...favorites, weather.name]);
    } else {
      alert("City already added.");
    }
  };

  // Remove Favorite
  const removeFavorite = (city) => {
    setFavorites(favorites.filter((item) => item !== city));
  };

  // Load Favorite
  const loadFavorite = (city) => {
    searchWeather(city);
  };

  // Load weather when app starts
  useEffect(() => {
    getCurrentLocation();

    const interval = setInterval(() => {
      getCurrentLocation();
    }, 300000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`container ${darkMode ? "dark" : ""}`}
      style={{
        backgroundImage: background ? `url(${background})` : "none",
      }}
    >
      <h1 className="title">🌍 Global Weather App</h1>

      {/* Dark Mode */}
      <button
        className="dark-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      {/* Search + Voice Search */}
      <div className="search-section">
        <SearchBar onSearch={searchWeather} />
        <VoiceSearch onSearch={searchWeather} />
      </div>

      {/* Current Location */}
      <button
        className="location-btn"
        onClick={getCurrentLocation}
      >
        📍 Use My Location
      </button>

      {/* Add Favorite */}
      {weather && (
        <button
          className="favorite-btn"
          onClick={addFavorite}
        >
          ❤️ Add Current City
        </button>
      )}

      {weather && (
        <>
          {/* Current Weather */}
          <div className="weather-container">
            <WeatherCard weather={weather} />
            <WeatherDetails weather={weather} />
          </div>

          {/* Hourly Forecast */}
          <HourlyForecast forecast={forecast} />

          {/* 5 Day Forecast */}
          <Forecast forecast={forecast} />

          {/* Air Quality */}
          <AirQuality air={air} />

          {/* Interactive Map */}
          <Suspense fallback={<p>Loading...</p>}>
            <MapView weather={weather} />
          </Suspense>

          <Suspense fallback={<p>Loading...</p>}>
            <WeatherCharts forecast={forecast} />
          </Suspense>

          {/* Favorite Cities */}
          <FavoriteCities
            favorites={favorites}
            onSelect={loadFavorite}
            onRemove={removeFavorite}
          />

         

          {/* Sunrise & Sunset */}
          <SunCard weather={weather} />

          {/* AI Weather Assistant */}
          <WeatherAssistant weather={weather} />

          {/* Settings */}
          <Settings
            darkMode={darkMode}
            setDarkMode={setDarkMode}

          />
          
        </>
      )}
    </div>
  );
}

export default App;