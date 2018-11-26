import { combineReducers } from 'redux-immutable';

const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
  let newState = state;
  /*if (action.type === LOGOUT) {
    newState = undefined;
  }*/

  return appReducer(newState, action);
};

export default rootReducer;