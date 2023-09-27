import axios from "axios";
import { API_URL } from "./apiUrl";
export const fetchMovies = async (searchKey, setMovies) => {
  const type = searchKey ? "search" : "discover";
  const {
    data: { results },
  } = await axios.get(`${API_URL}${type}/movie`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
      query: searchKey,
    },
  });
  setMovies(results);
};
export const fetchComingMovies = async (setCurrentSelection) => {
  const {
    data: { results },
  } = await axios.get(`${API_URL}movie/now_playing`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });
  setCurrentSelection(results);
};
export const fetchPopularMovies = async (setMostPopularMovies) => {
  const {
    data: { results },
  } = await axios.get(`${API_URL}movie/popular`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });
  setMostPopularMovies(results);
};
export const fetchTopMovies = async (setHighestRatedMovies) => {
  const {
    data: { results },
  } = await axios.get(`${API_URL}movie/top_rated`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });
  setHighestRatedMovies(results);
};
export const fetchUpComingMovies = async (setUpcomingMovies) => {
  const {
    data: { results },
  } = await axios.get(`${API_URL}movie/upcoming`, {
    params: {
      api_key: process.env.REACT_APP_MOVIE_API_KEY,
    },
  });
  setUpcomingMovies(results);
};
export const fetchMovieDetails = async (id) => {
  try {
    const response = await axios.get(`${API_URL}movie/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
        append_to_response: "videos",
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
export const fetchCastOfMovie = async (id) => {
  try {
    const response = await axios.get(`${API_URL}movie/${id}/credits`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching movie cast", error);
    return null;
  }
};
export const fetchRecommendation = async (id) => {
  try {
    const response = await axios.get(`${API_URL}movie/${id}/recommendations`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching movie recommendation", error);
    return null;
  }
};
export const fetchSimilarMovies = async (id) => {
  try {
    const response = await axios.get(`${API_URL}movie/${id}/similar`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching similar movie ", error);
    return null;
  }
};
// ----person-(details/movies)---
export const fetchDetailsActor = async (id) => {
  try {
    const response = await axios.get(`${API_URL}person/${id}`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching Actor details ", error);
    return null;
  }
};
export const fetchMovieActor = async (id) => {
  try {
    const response = await axios.get(`${API_URL}person/${id}/movie_credits`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching Actor details ", error);
    return null;
  }
};
export const fetchImagesActor = async (id) => {
  try {
    const response = await axios.get(`${API_URL}person/${id}/images`, {
      params: {
        api_key: process.env.REACT_APP_MOVIE_API_KEY,
      },
    });
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error Fetching Actor Images ", error);
    return null;
  }
};
// ---discover-movies---
export const fetchAllMovies = async (number) => {
  try {
    const response = await axios.get(
      `${API_URL}discover/movie?page=${number===0?1:number}`,
      {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
        },
      }
    );
    const data = await response;
    return data;
  } catch (error) {
    console.log("Error fetching all Movies", error);
    return null;
  }
};
