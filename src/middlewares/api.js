import { getMoviesSuccess } from '../actions/movie';
import { GET_MOVIES } from '../actions/types';

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

    default: 
    next(action);

  }
};

export default api;
