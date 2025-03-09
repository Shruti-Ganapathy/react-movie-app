import React, { useState, useEffect } from "react";
import { fetchMovies } from "./api";
import SearchBar from "./components/SearchBar";
import MoviesGrid from "./components/MoviesGrid";
import Pagination from "./components/Pagination";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [type, setType] = useState("all");
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query) {
      searchMovies();
    }
  }, [query, page, type]);

  const searchMovies = async () => {
    const movieType = type === "all" ? "" : type;
    const data = await fetchMovies(query, page, movieType);
    if (data.Response === "True") {
      setMovies(data.Search);
      setTotalPages(Math.ceil(data.totalResults / 10));
      setError(null);
    } else {
      setMovies([]);
      setError(data.Error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white flex flex-col items-center px-4">
      <h1 className="text-4xl font-extrabold mt-10 mb-6 text-center tracking-wide">🎬 Movie Search</h1>

      <SearchBar query={query} setQuery={setQuery} type={type} setType={setType} />

      {error && <p className="text-red-400 text-lg text-center mt-4">{error}</p>}

      <MoviesGrid movies={movies} />

      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default SearchPage;