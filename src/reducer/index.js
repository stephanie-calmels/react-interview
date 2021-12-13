import { GET_MOVIES_SUCCESS } from "../actions/types";

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

    default: 
      return oldState;
  }
};

export default reducer;