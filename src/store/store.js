import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducer';
import apiMiddleware from '../middlewares/api';

const store = createStore(
  reducer, 
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
));

export default store;
