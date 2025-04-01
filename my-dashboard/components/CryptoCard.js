
import React from 'react';

const CryptoCard = ({ data }) => {
  if (!data || data.length === 0) return <div>No data available</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Cryptocurrency</h2>
      {data.map((crypto, index) => (
        <div key={index} className="mb-4">
          <h3 className="text-lg font-semibold">{crypto.name}</h3>
          <p>Price: ${crypto.current_price}</p>
          <p>24h Change: {crypto.price_change_percentage_24h}%</p>
          <p>Market Cap: ${crypto.market_cap}</p>
        </div>
      ))}
    </div>
  );
};

export default CryptoCard;
