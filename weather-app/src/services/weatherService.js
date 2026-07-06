import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Current Weather by City
 */
export const getWeatherByCity = async (
  city,
  tempUnit = "metric",
  language = "en"
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=${tempUnit}&lang=${language}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Current Weather by GPS
 */
export const getWeatherByCoords = async (
  lat,
  lon,
  tempUnit = "metric",
  language = "en"
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${tempUnit}&lang=${language}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 5-Day Forecast by City
 */
export const getForecastByCity = async (
  city,
  tempUnit = "metric",
  language = "en"
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=${tempUnit}&lang=${language}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * 5-Day Forecast by GPS
 */
export const getForecastByCoords = async (
  lat,
  lon,
  tempUnit = "metric",
  language = "en"
) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${tempUnit}&lang=${language}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * Air Quality
 * (Language and units are not needed for this API.)
 */
export const getAirQuality = async (lat, lon) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};