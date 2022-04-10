import { combineReducers } from 'redux';
import productReducer from './product';

const rootReducer = combineReducers({
  prd: productReducer,
});

export default rootReducer;
