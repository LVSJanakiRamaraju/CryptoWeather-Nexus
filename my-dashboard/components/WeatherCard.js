
import React from 'react';
import Link from 'next/link';

const WeatherCard = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Weather</h2>
      {data.map((city, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{city.name}</h3>
          <p>Temperature: {city.main.temp}°C</p>
          <p>Humidity: {city.main.humidity}%</p>
          <p>Condition: {city.weather[0].description}</p>

          <Link href={`/weather/${city}`} className="text-blue-500">View Details</Link>
        </div>
      ))}
      
    </div>
  );
};

export default WeatherCard;
