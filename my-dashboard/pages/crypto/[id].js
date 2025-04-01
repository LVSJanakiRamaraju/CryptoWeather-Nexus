import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

const CryptoDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [cryptoData, setCryptoData] = useState([]);

  useEffect(() => {
    if (!id) return;

    const fetchCryptoHistory = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_COINGECKO_API_URL}/coins/${id}/market_chart?vs_currency=usd&days=7`
        );

        setCryptoData(response.data.prices);
      } catch (error) {
        console.error('Error fetching crypto history:', error);
      }
    };

    fetchCryptoHistory();
  }, [id]);

  const chartData = {
    labels: cryptoData.map(([timestamp]) => new Date(timestamp).toLocaleDateString()),
    datasets: [
      {
        label: 'Price (USD)',
        data: cryptoData.map(([_, price]) => price),
        borderColor: 'gold',
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Crypto Price History: {id}</h1>

      {cryptoData.length > 0 ? (
        <>
          <Line data={chartData} className="mt-6"/>
          <table className="mt-6 w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-700 text-white">
                <th className="p-2">Date</th>
                <th className="p-2">Price (USD)</th>
              </tr>
            </thead>
            <tbody>
              {cryptoData.map(([timestamp, price], index) => (
                <tr key={index} className="border border-gray-300">
                  <td className="p-2">{new Date(timestamp).toLocaleDateString()}</td>
                  <td className="p-2">${price.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default CryptoDetail;
