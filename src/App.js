import React, { useState } from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  const [city, setCity] = useState('London');

  return (
    <div className="container">
      <h1>🌦️ Weather App</h1>
      <input
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <WeatherDisplay city={city} />
    </div>
  );
}

export default App;
