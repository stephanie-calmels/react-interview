import { getMoviesSuccess, deleteMovieSuccess, updateLikes, getCategoriesSuccess, getCategories, getMoviesByCategoriesSuccess } from '../actions/movie';
import { GET_MOVIES, DELETE_MOVIE, ADD_LIKE, ADD_DISLIKE, GET_CATEGORIES, GET_MOVIES_BY_CATEGORIES } from '../actions/types';

import { movies$ } from '../movies';

const api = (store) => (next) => (action) => {
  switch (action.type) {
    case GET_MOVIES: {
      movies$
        .then((response) => {
          store.dispatch(getMoviesSuccess(response));
          store.dispatch(getCategories());
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
          store.dispatch(getCategories());
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

    case GET_CATEGORIES: {
      const { movies } = store.getState();
      let categories = [];
      for (let movie of movies) {
        const found = categories.find(category => category === movie.category);
        if (!found) {
          categories.push(movie.category);
        }
      }
      store.dispatch(getCategoriesSuccess(categories));
      break;
    }

    case GET_MOVIES_BY_CATEGORIES: {
      const { movies } = store.getState();
      let filteredMovies = [];
      for (let movie of movies) {
        for (let category of action.categories) {
          if (movie.category === category) {
            filteredMovies.push(movie);
          }
        }
      }
      store.dispatch(getMoviesByCategoriesSuccess(filteredMovies));
      break;
    }

    default: 
    next(action);

  }
};

export default api;
