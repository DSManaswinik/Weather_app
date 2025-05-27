import React, { useState, useEffect } from 'react';
import { fetchWeather } from '../api/weatherService';

function WeatherDisplay({ city }) {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const getWeather = async () => {
      try {
        const data = await fetchWeather(city);
        setWeather(data);
        setError('');
      } catch (err) {
        setError(err);
        setWeather(null);
      }
    };
    getWeather();
  }, [city]);

  if (error) return <div style={{ textAlign: 'center', color: 'red' }}>Error: {error}</div>;
  if (!weather) return <div style={{ textAlign: 'center' }}>Loading...</div>;

  return (
    <div
      className="weather-info"
      style={{
        textAlign: 'center',
        marginTop: '30px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        maxWidth: '400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        backgroundColor: '#f0f8ff',
        boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
      }}
    >
      <h2>📍 {weather.name}, {weather.sys.country}</h2>
      <p>🌡️ Temperature: {weather.main.temp}°C</p>
      <p>☁️ Condition: {weather.weather[0].description}</p>
    </div>
  );
}

export default WeatherDisplay;
