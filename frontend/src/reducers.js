import { combineReducers } from "redux";
import productLists from './containers/Pedidos/reducer';
import { reducer as searchReducer } from 'redux-search';

export default combineReducers({
  productLists,
  search: searchReducer
});