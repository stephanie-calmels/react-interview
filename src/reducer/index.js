import { GET_MOVIES_SUCCESS, DELETE_MOVIE_SUCCESS, UPDATE_LIKES, GET_CATEGORIES_SUCCESS, GET_MOVIES_BY_CATEGORIES_SUCCESS } from "../actions/types";

const initialState = {
  movies: {},
  categories: [],
  filteredMovies: []
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
        ...oldState,
        movies: moviesToKeep
      }

    case UPDATE_LIKES: 
      let updatedMovies = currentState.movies.filter(movie => movie.id !== action.data.id);
      updatedMovies.push(action.data);
      updatedMovies.sort((a, b) => parseFloat(a.id) - parseFloat(b.id));

      return {
        movies: updatedMovies
      }

    case GET_CATEGORIES_SUCCESS: 
      return {
        ...oldState,
        categories: action.data
      }
    
    case GET_MOVIES_BY_CATEGORIES_SUCCESS: 
      return {
        ...oldState,
        filteredMovies: action.data
      }


    default: 
      return oldState;
  }
};

export default reducer;
