import { GET_MOVIES, GET_MOVIES_SUCCESS, DELETE_MOVIE, DELETE_MOVIE_SUCCESS } from "./types";

export const getMovies = () => ({
  type: GET_MOVIES
});

export const getMoviesSuccess = (data) => ({
  type: GET_MOVIES_SUCCESS,
  data
});

export const deleteMovie = (id) => ({
  type: DELETE_MOVIE,
  id
});

export const deleteMovieSuccess = (data) => ({
  type: DELETE_MOVIE_SUCCESS,
  data
});
