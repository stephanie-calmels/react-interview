import { getMoviesSuccess, deleteMovieSuccess, updateLikes } from '../actions/movie';
import { GET_MOVIES, DELETE_MOVIE, ADD_LIKE, ADD_DISLIKE } from '../actions/types';

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

    case ADD_LIKE: {
      movies$
        .then((response) => {
          let movieToLike = response.find(movie => movie.id === action.id);
          movieToLike.likes += 1;
          if (action.note) {
            movieToLike.dislikes -= 1;
          }
          store.dispatch(updateLikes(movieToLike));
        })        
        .catch((error) => {
          console.log(`Une erreur s'est produite : ${error}`);
        })

      break;
    }

    case ADD_DISLIKE: {
      movies$
        .then((response) => {
          let movieToDislike = response.find(movie => movie.id === action.id);
          movieToDislike.dislikes += 1;
          if (action.note) {
            movieToDislike.likes -= 1;
          }
          store.dispatch(updateLikes(movieToDislike));
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
