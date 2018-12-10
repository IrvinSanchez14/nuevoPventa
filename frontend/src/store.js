import { createStore,compose,applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import { fromJS } from 'immutable';


export let store; // eslint-disable-line import/no-mutable-exports


export default function configureStore(initialState = {}) {
  store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  return store;
}