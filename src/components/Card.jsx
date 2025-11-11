import React from 'react';

const Card = ({ Title, Year, imdbID, Type, Poster }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={Poster} alt={Title} />
      <div className="px-6 py-4">
        <h3 className="font-bold text-xl mb-2">{Title}</h3>
        <p className="text-gray-700 text-base">{Year}</p>
        <p className="text-gray-700 text-base">{Type}</p>
        <p className="text-gray-700 text-base">{imdbID}</p>
      </div>
    </div>
  );
};

export default Card;


