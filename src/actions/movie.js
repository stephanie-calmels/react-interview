import { GET_MOVIES, GET_MOVIES_SUCCESS } from "./types";

export const getMovies = () => ({
  type: GET_MOVIES
});

export const getMoviesSuccess = (data) => ({
  type: GET_MOVIES_SUCCESS,
  data
});
