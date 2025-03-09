import React, { useState, useEffect, useCallback } from "react";
import { fetchMovies } from "./api";
import SearchBar from "./components/SearchBar";
import MoviesGrid from "./components/MoviesGrid";
import Pagination from "./components/Pagination";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState("");

  // Optimized fetchMovies function using useCallback
  const searchMovies = useCallback(async (query, page = 1) => {
    if (!query) return; // Prevent API calls if query is empty

    try {
      setError(""); // Clear previous errors
      const response = await fetchMovies(query, page);

      if (response.Search) {
        setMovies(response.Search);
        setTotalPages(Math.ceil(response.totalResults / 10)); // Assuming 10 movies per page
      } else {
        setMovies([]);
        setError("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
      setError("Failed to load movies. Please try again.");
    }
  }, []);

  // Fetch movies when query or page changes
  useEffect(() => {
    searchMovies(query, page);
  }, [query, page, searchMovies]);

  return (
    <div className="search-page">
      <SearchBar setQuery={setQuery} />
      {error && <p className="error-message">{error}</p>}
      <MoviesGrid movies={movies} />
      <Pagination page={page} totalPages={totalPages} setPage={setPage} />
    </div>
  );
};

export default SearchPage;
