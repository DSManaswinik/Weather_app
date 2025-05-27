const API_KEY = 'eb582a3bc91fad75efba224aea0e6cac'; // Replace with your actual OpenWeatherMap API key

export const getCurrentWeather = async (city) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('City not found');
  }
  return response.json();
};

export const getForecast = async (lat, lon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
  );
  if (!response.ok) {
    throw new Error('Forecast data not found');
  }
  return response.json();
};
