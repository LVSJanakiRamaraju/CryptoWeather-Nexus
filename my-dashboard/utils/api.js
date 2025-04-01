// utils/api.js
import axios from 'axios';

// Axios instance for default configuration
const axiosInstance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5',
  timeout: 10000,
});

// Fetch weather data from OpenWeatherMap
export const fetchWeatherData = async (city) => {
  const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;
  const response = await axiosInstance.get(`/weather`, {
    params: {
      q: city,
      appid: apiKey,
      units: 'metric',  // To get temperature in Celsius
    },
  });
  return response.data;
};

// Fetch crypto data from CoinGecko
export const fetchCryptoData = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_COINGECKO_API_URL;
  const response = await axios.get(`${apiUrl}/coins/markets`, {
    params: {
      vs_currency: 'usd',
      ids: 'bitcoin,ethereum,litecoin',  // You can change to any other coins
    },
  });
  return response.data;
};

// Fetch news data from NewsData.io
export const fetchCryptoNews = async () => {
  const apiKey = process.env.NEXT_PUBLIC_NEWSAPI_KEY;
  const response = await axios.get('https://newsdata.io/api/1/news', {
    params: {
      apiKey,
      category: 'crypto',
      language: 'en',
    },
  });
  return response.data;
};
