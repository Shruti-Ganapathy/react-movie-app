import React from "react";
import { Link } from "react-router-dom";

const MoviesGrid = ({ movies }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6 w-full max-w-6xl">
      {movies.map((movie) => (
        <div key={movie.imdbID} className="group relative overflow-hidden rounded-lg shadow-lg bg-gray-800 transform transition-transform hover:scale-105">
          <Link to={`/movie/${movie.imdbID}`}>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-72 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">{movie.Title}</h2>
              <p className="text-sm text-gray-400">{movie.Year}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MoviesGrid;
