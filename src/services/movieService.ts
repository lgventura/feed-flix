import api from "./api";

const API_KEY = "8d15ce48bb44a80298b43312a8f1b52f";
const LANGUAGE = "pt-BR";

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  release_date: string;
  genre_ids: number[];
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface MovieDetail extends Movie {
  genres: { id: number; name: string }[];
  runtime: number;
  budget: number;
  revenue: number;
  status: string;
  tagline: string;
}

export const movieService = {
  getNowPlaying: async (page: number = 1): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>("movie/now_playing", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page,
      },
    });
    return response.data;
  },

  getPopular: async (page: number = 1): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>("movie/popular", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page,
      },
    });
    return response.data;
  },

  getTopRated: async (page: number = 1): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>("movie/top_rated", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page,
      },
    });
    return response.data;
  },

  getMovieDetail: async (movieId: number): Promise<MovieDetail> => {
    const response = await api.get<MovieDetail>(`movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
      },
    });
    return response.data;
  },

  getSimilarMovies: async (
    movieId: number,
    page: number = 1
  ): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>(`movie/${movieId}/similar`, {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        page,
      },
    });
    return response.data;
  },

  searchMovies: async (
    query: string,
    page: number = 1
  ): Promise<MovieResponse> => {
    const response = await api.get<MovieResponse>("search/movie", {
      params: {
        api_key: API_KEY,
        language: LANGUAGE,
        query,
        page,
      },
    });
    return response.data;
  },

  getImageUrl: (
    path: string,
    size: "original" | "w500" | "w780" = "original"
  ): string => {
    return `https://image.tmdb.org/t/p/${size}${path}`;
  },
};
