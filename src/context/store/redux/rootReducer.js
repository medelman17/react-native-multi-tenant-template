import {combineReducers} from 'redux';
import {unsplashReducer} from './unsplashed';
const initialState = {
  unsplash: {},
};

export const userReducer = (state = initialState, action) => {
  return state;
};

export default combineReducers({
  unsplash: unsplashReducer,
});
