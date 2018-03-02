import { createStore, combineReducers } from 'redux';
import board from '../reducers/board.js';

const game = combineReducers({ board });

const rootReducer = (state, action) => {
  let newState;

  if (action.type === 'RESET') {
    newState = undefined;
  } else {
    newState = state;
  }

  return game(newState, action);
};

const store = createStore(rootReducer);

module.exports = store;
