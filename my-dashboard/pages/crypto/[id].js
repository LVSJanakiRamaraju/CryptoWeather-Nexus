
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const CryptoDetails = () => {
  const [cryptoDetails, setCryptoDetails] = useState(null);
  const router = useRouter();
  const { id } = router.query; 

  const fetchCryptoDetails = async (id) => {
    try {
        const apiUrl = `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/simple/price?ids=bitcoin&vs_currencies=usd`;

        console.log('Fetching Crypto Data from:', apiUrl); 
    
        const response = await axios.get(apiUrl);
        console.log('Crypto API Response:', response.data);
        
        setCryptoDetails(response.data);
      } catch (error) {
        console.error('Error fetching crypto data:', error.response?.data || error.message);
        return null;
    }
  };

  useEffect(() => {
    if (id) {
      fetchCryptoDetails(id);
    }
  }, [id]);

  if (!cryptoDetails) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">{cryptoDetails.name} Details</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold">{cryptoDetails.name}</h2>
        <p>Price: ${cryptoDetails.market_data.current_price.usd}</p>
        <p>24h Change: {cryptoDetails.market_data.price_change_percentage_24h}%</p>
        <p>Market Cap: ${cryptoDetails.market_data.market_cap.usd}</p>
        {/*<h3 className="mt-4 text-lg font-semibold">Historical Data</h3>
        <p>More detailed information can go here...</p> */}
      </div>
    </div>
  );
};

export default CryptoDetails;
