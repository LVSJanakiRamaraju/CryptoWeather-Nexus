import React from 'react';
import Link from 'next/link';

const CryptoCard = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-gray-500 py-4">No data available</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Cryptocurrency</h2>
      {data.map((crypto, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 mb-4 last:mb-0">
          <h3 className="text-xl font-semibold text-gray-800">{crypto.name}</h3>
          <div className="text-sm text-gray-600 mt-2">
            <p className="mb-1">Price: <span className="font-semibold">${crypto.current_price}</span></p>
            <p className="mb-1">24h Change: <span className={crypto.price_change_percentage_24h >= 0 ? "text-green-500" : "text-red-500"}>
              {crypto.price_change_percentage_24h}%
            </span></p>
            <p className="mb-1">Market Cap: <span className="font-semibold">${crypto.market_cap}</span></p>
          </div>
          <Link href={`/crypto/${crypto.id}`} className="text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out mt-2 inline-block">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CryptoCard;
