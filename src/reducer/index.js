import { GET_MOVIES_SUCCESS, DELETE_MOVIE_SUCCESS } from "../actions/types";

const initialState = {
  movies: {}
};

const reducer = (oldState = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_SUCCESS: 
      return {
        ...oldState,
        movies: action.data
      }

    case DELETE_MOVIE_SUCCESS: 
      let currentState = {...oldState};
      const moviesToKeep = currentState.movies.filter(movie => movie.id !== action.data.id);
      
      return {
        movies: moviesToKeep
      }

    default: 
      return oldState;
  }
};

export default reducer;
