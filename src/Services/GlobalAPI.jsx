import axios from "axios";

const baseUrl = import.meta.env.VITE_TMDB_BASE_URL;
const apiKey = import.meta.env.VITE_TMDB_API_KEY;
const bearerToken = import.meta.env.VITE_TMDB_BEARER_TOKEN;

const tmdbApi = axios.create({
  baseURL: baseUrl,
  headers: {
    'Authorization': `Bearer ${bearerToken}`,
    'accept': 'application/json'
  }
});

const getTrendingVideos = () => {
  return axios.get(`${baseUrl}/trending/all/day?api_key=${apiKey}`);
};

const getMovieByGenreId = (genreId) => {
  return axios.get(`${baseUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`);
};

const getMovieDetails = (movieId) => {
  return tmdbApi.get(`/movie/${movieId}`, {
    params: { api_key: apiKey }
  });
};

const searchMovies = (query, page = 1) => {
  return tmdbApi.get('/search/movie', {
    params: {
      api_key: apiKey,
      query,
      page
    }
  });
};

const fetchTrendingMovies = async () => {
  try {
    const response = await getTrendingVideos();
    console.log(response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};

const fetchMovieById = async (movieId) => {
  try {
    const response = await getMovieDetails(movieId);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(`Error fetching movie with ID ${movieId}:`, error);
    throw error;
  }
};

export default {
  tmdbApi,
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetails,
  searchMovies,
  fetchTrendingMovies,
  fetchMovieById
};
