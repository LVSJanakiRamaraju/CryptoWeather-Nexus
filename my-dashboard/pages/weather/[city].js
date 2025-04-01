// pages/weather/[city].js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const WeatherDetails = () => {
  const [cityWeather, setCityWeather] = useState(null);
  const router = useRouter();
  const { city } = router.query; 

  const fetchCityWeather = async (city) => {
    try {
     const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    console.log('Fetching Weather Data from:', url); 

    const response = await axios.get(url);
    console.log('API Response:', response.data); 
    
    setCityWeather(response.data);
    return cityWeather
  } catch (error) {
    console.error('Error fetching weather data:', error.response?.data || error.message);
    return null;
  }
  };

  useEffect(() => {
    if (city) {
      fetchCityWeather(city);
    }
  }, [city]);

  if (!cityWeather) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">{cityWeather.name} Weather Details</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">Weather in {cityWeather.name}</h2>
        <p>Temperature: {cityWeather.main.temp}°C</p>
        <p>Humidity: {cityWeather.main.humidity}%</p>
        <p>Condition: {cityWeather.weather[0].description}</p>
        {/* Optionally display more weather data (e.g., forecast, wind speed) */}
      </div>
    </div>
  );
};

export default WeatherDetails;
