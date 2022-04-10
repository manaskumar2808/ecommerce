import { combineReducers } from 'redux';
import productReducer from './product';
import cartReducer from './cart';

const rootReducer = combineReducers({
  prd: productReducer,
  crt: cartReducer,
});

export default rootReducer;
