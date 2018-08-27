import { combineReducers } from 'redux';
import drones from './drones';
import loading from './loading';

export default combineReducers({
  drones,
  loading,
});
