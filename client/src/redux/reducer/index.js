import {
  CLEAR_MOVIES,
  GET_MOVIES,
  GET_MOVIE_DETAIL,
  SEARCH_MOVIE,
} from "../actions";

const initialState = {
  movies: [],
  moviesDetail: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };

    case GET_MOVIE_DETAIL: {
      return {
        ...state,
        moviesDetail: action.payload,
      };
    }
    case SEARCH_MOVIE:
      return {
        ...state,
        movies: action.payload,
      };
    case CLEAR_MOVIES: {
      return {
        ...state,
        moviesDetail: [],
      };
    }
    default:
      return state;
  }
};
export default rootReducer;
