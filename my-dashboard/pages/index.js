// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import WeatherCard from '../components/WeatherCard';
import CryptoCard from '../components/CryptoCard';


const Dashboard = () => {
  const [weatherData, setWeatherData] = useState([]);
  const [cryptoData, setCryptoData] = useState([]);


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

  // Fetch cryptocurrency data (BTC, ETH, and one more)
  const fetchCryptoData = async () => {
    try {
      const apiUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,solana&order=market_cap_desc&per_page=3&page=1&sparkline=false';

    console.log('Fetching Crypto Data from:', apiUrl); 
    const response = await axios.get(apiUrl);
    console.log('Crypto API Response:', response.data); 
    
    setCryptoData(response.data);
  } catch (error) {
    console.error('Error fetching crypto data:', error.response?.data || error.message);
    return null;
    }
  };

  useEffect(() => {
    fetchWeatherData();
    fetchCryptoData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <WeatherCard data={weatherData} />
        </div>
        <div>
          <CryptoCard data={cryptoData} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
