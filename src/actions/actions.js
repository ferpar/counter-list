import { 
  ADD_COUNTER,
  REM_COUNTER,
  INCREMENT,
  DECREMENT
} from './actionTypes.js';

export const addCounter = () => ({
  type: ADD_COUNTER
})

export const remCounter = index => ({
  type: REM_COUNTER,
  index: index
})

export const increment = index => ({
  type: INCREMENT,
  index: index
})

export const decrement = index => ({
  type: DECREMENT,
  index: index
})


