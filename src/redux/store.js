import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {picsReducer} from './pictures/reducer';
import {createAPI} from './axios/axios';

const axiosAPI = createAPI();

export const store = createStore(
  picsReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(axiosAPI)))
);
