import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const WeatherDetail = () => {
  const router = useRouter();
  const { city } = router.query;
  const [weatherData, setWeatherData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!city) return;

    const fetchWeatherData = async () => {
      try {
        const apiKey = process.env.NEXT_PUBLIC_OPENWEATHERMAP_API_KEY;

        // Step 1: Get latitude & longitude from city name
        const geoResponse = await axios.get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`
        );

        if (geoResponse.data.length === 0) {
          throw new Error("City not found");
        }

        const { lat, lon } = geoResponse.data[0];

        // Step 2: Get historical weather (past 5 hours)
        const currentTime = Math.floor(Date.now() / 1000); // Current UNIX timestamp
        const historicalWeather = [];

        for (let i = 0; i < 5; i++) {
          const timestamp = currentTime - i * 3600; // Go back by hours
          const weatherResponse = await axios.get(
            `https://api.openweathermap.org/data/2.5/onecall/timemachine?lat=${lat}&lon=${lon}&dt=${timestamp}&appid=${apiKey}&units=metric`
          );

          historicalWeather.push(weatherResponse.data);
        }

        setWeatherData(historicalWeather.reverse());  // Ensure latest data is first
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setError("Failed to fetch weather data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchWeatherData();
  }, [city]);

  // Prepare chart data
  const chartData = {
    labels: weatherData.map((entry) =>
      new Date(entry.current.dt * 1000).toLocaleTimeString()
    ),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: weatherData.map((entry) => entry.current.temp),
        borderColor: 'blue',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Weather History for {city}</h1>

      {loading ? (
        <p>Loading data...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : weatherData.length > 0 ? (
        <>
          <Line data={chartData} className="mt-6" />
          <table className="mt-6 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-2">Time</th>
                <th className="p-2">Temperature (°C)</th>
                <th className="p-2">Weather</th>
              </tr>
            </thead>
            <tbody>
              {weatherData.map((entry, index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="p-2">
                    {new Date(entry.current.dt * 1000).toLocaleTimeString()}
                  </td>
                  <td className="p-2">{entry.current.temp}°C</td>
                  <td className="p-2">{entry.current.weather[0].description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No weather data available.</p>
      )}
    </div>
  );
};

export default WeatherDetail;
