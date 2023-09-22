import { combineReducers } from 'redux';
import hotel from './hotel';

export default (history) =>
  combineReducers({
    hotel,
  });
