// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import CryptoCard from '../components/CryptoCard';
import NewsCard from '../components/NewsCard';

const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);

  const fetchWeatherData = async () => {
    const cities = ['New York', 'London', 'Tokyo'];
    try {
      const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
      const responses = await Promise.all(
        
        cities.map(city =>
          axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        )
      );
      setWeatherData(responses.map(response => response.data));
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };


  useEffect(() => {
    fetchWeatherData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <WeatherCard data={weatherData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
