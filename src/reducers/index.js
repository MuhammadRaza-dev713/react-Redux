import { combineReducers } from 'redux';
import changeNumberReducer from './UpdownNumber';

const rootReducer = combineReducers({
  changeNumberReducer,
});

export default rootReducer;
