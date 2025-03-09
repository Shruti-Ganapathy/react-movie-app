const API_KEY = "e9ecc6c1";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMovies = async (query, page = 1, type = "") => {
  try {
    const response = await fetch(
      `${BASE_URL}?s=${query}&page=${page}&type=${type}&apikey=${API_KEY}`
    );
    return await response.json();
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { Response: "False", Error: "Failed to fetch movies" };
  }
};

export const fetchMovieDetails = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}?i=${id}&apikey=${API_KEY}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return { Response: "False", Error: "Failed to fetch details" };
  }
};
