import { combineReducers } from 'redux'
import {
  ADD_COUNTER,
  REM_COUNTER,
  INCREMENT,
  DECREMENT
}
from '../actions/actionTypes.js'

const initialState = {
  counters : []
}

const counters = function(state = [], action) {
  switch (action.type) {
    case ADD_COUNTER:
      console.log(action)
      return [...state, 0];
    case REM_COUNTER:
      return [...state.slice(0, action.index),
        ...state.slice(action.index + 1)]
    case INCREMENT:
      console.log(action)
      return [...state.slice(0, action.index),
        state[action.index] + 1,
        ...state.slice(action.index + 1) ]
    case DECREMENT:
      return [...state.slice(0, action.index),
        state[action.index] - 1,
        ...state.slice(action.index + 1) ]
    default:
      return state
  }
}

const rootReducer = combineReducers({
  counters
})

export default rootReducer;
