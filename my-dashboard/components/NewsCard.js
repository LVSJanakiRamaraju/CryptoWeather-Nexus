import React from 'react';

const NewsCard = ({ data }) => {
  if (!data || data.length === 0) return <div className="text-center text-gray-500 py-4">No news available</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Crypto News</h2>
      <ul className="space-y-6">
        {data.map((newsItem, index) => (
          <li key={index} className="flex flex-col">
            <a
              href={newsItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800 transition duration-200 ease-in-out"
            >
              {newsItem.title}
            </a>
            <p className="text-sm text-gray-600 mt-2">{newsItem.description}</p>
            <hr className="my-4 border-gray-300" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
