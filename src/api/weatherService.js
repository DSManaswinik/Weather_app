// src/api/weatherService.js
import axios from 'axios';

const API_KEY = "eb582a3bc91fad75efba224aea0e6cac";

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || error.message;
  }
};
