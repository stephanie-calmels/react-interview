import { getMoviesSuccess, deleteMovieSuccess } from '../actions/movie';
import { GET_MOVIES, DELETE_MOVIE } from '../actions/types';

import { movies$ } from '../movies';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES: {
      movies$
        .then((response) => {
          store.dispatch(getMoviesSuccess(response));
        })
        .catch((error) => {
          console.log(`Une erreur s'est produite : ${error}`);
        })
      break;
    }

    case DELETE_MOVIE: {
      movies$
        .then((response) => {
          const movieToDelete = response.find(movie => movie.id === action.id);
          store.dispatch(deleteMovieSuccess(movieToDelete));
        })        
        .catch((error) => {
          console.log(`Une erreur s'est produite : ${error}`);
        })

      break;
    }

    default: 
    next(action);

  }
};

export default api;
