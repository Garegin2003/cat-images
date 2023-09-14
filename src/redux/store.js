import thunk from 'redux-thunk';
import {
  FETCH_CATEGORIES_SUCCESS,
  FETCH_IMAGES_SUCCESS,
} from './actions/actions';
import { applyMiddleware, createStore } from 'redux';

const initialState = {
  categories: [],
  images: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: [...action.payload],
      };
    case FETCH_IMAGES_SUCCESS:
      return {
        ...state,
        images: [...action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
