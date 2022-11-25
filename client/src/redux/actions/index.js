import axios from "axios";
export const GET_MOVIES = "GET_MOVIES";
export const GET_MOVIE_DETAIL = "GET_MOVIE_DETAIL";
export const SEARCH_MOVIE = "SEARCH_MOVIE";
export const CLEAR_MOVIES = "CLEAR_MOVIES";

export const getMovies = () => {
  return async function (dispatch) {
    const movies = await axios.get(`http://localhost:3001/movies`);
    dispatch({
      type: GET_MOVIES,
      payload: movies.data,
    });
  };
};
export const getMovieDetail = (id) => {
  return async function (dispatch) {
    const movies = await axios.get(`http://localhost:3001/movies/${id}`);
    dispatch({
      type: GET_MOVIE_DETAIL,
      payload: movies.data,
    });
  };
};

export const searchMovie = (name) => {
  return async function (dispatch) {
    const movies = await axios.get(`http://localhost:3001/movies?name=${name}`);
    dispatch({
      type: SEARCH_MOVIE,
      payload: movies.data,
    });
  };
};
export const clearMovies = () => {
  return async function (dispatch) {
    dispatch({
      type: CLEAR_MOVIES,
    });
  };
};
