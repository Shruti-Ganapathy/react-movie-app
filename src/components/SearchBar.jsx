import React from "react";

const SearchBar = ({ query, setQuery, type, setType }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-2xl bg-gray-800 p-4 rounded-lg shadow-lg">
      <input
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full md:w-3/4 p-3 rounded-md border border-gray-600 bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-lg"
      />
      <select
        value={type}
        onChange={(e) => setType(e.target.value)}
        className="w-full md:w-1/4 p-3 rounded-md border border-gray-600 bg-gray-900 text-white cursor-pointer shadow-lg"
      >
        <option value="all">All</option>
        <option value="movie">Movies</option>
        <option value="series">Series</option>
        <option value="episode">Episodes</option>
      </select>
    </div>
  );
};

export default SearchBar;

