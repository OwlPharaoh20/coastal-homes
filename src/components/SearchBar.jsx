// components/SearchBar.jsx
import React from 'react';

const SearchBar = () => {
  return (
    <div className="search-bar flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search properties"
        className="search-input w-full py-2 pl-10 text-sm text-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600"
      />
      <button
        className="search-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;