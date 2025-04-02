import React from 'react';
import Link from 'next/link';

const WeatherCard = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-gray-500 mt-5">No data available</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center text-white mb-6">🌤️ Weather Report</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((city, index) => (
          <div
            key={index}
            className="bg-white/30 backdrop-blur-lg p-5 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
            <p className="text-gray-700">🌡️ Temperature: <span className="font-semibold">{city.main.temp}°C</span></p>
            <p className="text-gray-700">💧 Humidity: <span className="font-semibold">{city.main.humidity}%</span></p>
            <p className="text-gray-700">🌍 Condition: <span className="font-semibold capitalize">{city.weather[0].description}</span></p>

            <Link 
              href={`/weather/${city.name}`} 
              className="mt-4 inline-block text-blue-600 font-semibold hover:underline transition-all duration-200"
            >
              🔍 View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherCard;
