import { GET_MOVIES_SUCCESS, DELETE_MOVIE_SUCCESS, UPDATE_LIKES } from "../actions/types";

const initialState = {
  movies: {}
};

const reducer = (oldState = initialState, action) => {
  let currentState = {...oldState};

  switch (action.type) {
    case GET_MOVIES_SUCCESS: 
      return {
        ...oldState,
        movies: action.data
      }

    case DELETE_MOVIE_SUCCESS: 
      const moviesToKeep = currentState.movies.filter(movie => movie.id !== action.data.id);
      
      return {
        movies: moviesToKeep
      }

    case UPDATE_LIKES: 
      let updatedMovies = currentState.movies.filter(movie => movie.id !== action.data.id);
      updatedMovies.push(action.data);
      updatedMovies.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

      return {
        movies: updatedMovies
      }

    default: 
      return oldState;
  }
};

export default reducer;
