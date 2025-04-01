import React from 'react';

const NewsCard = ({ data }) => {
  if (!data || data.length === 0) return <div>No news available</div>;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">Crypto News</h2>
      <ul className="space-y-4">
        {data.map((newsItem, index) => (
          <li key={index}>
            <a
              href={newsItem.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              {newsItem.title}
            </a>
            <p className="text-sm text-gray-500">{newsItem.description}</p>
            <hr className="my-2" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCard;
