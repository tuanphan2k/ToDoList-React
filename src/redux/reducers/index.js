import { combineReducers } from 'redux';
import taskReducer from './task.reducer';

export default combineReducers({
  taskReducer: taskReducer,
})
