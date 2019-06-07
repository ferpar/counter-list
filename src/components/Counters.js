import React from 'react'
import { connect } from 'react-redux'
import {
  addCounter,
  remCounter,
  increment,
  decrement
} from '../actions/actions.js'

const CountersP = ({
  counters,
  addCounterC,
  remCounterC,
  incrementC,
  decrementC
}) => (
  <div className="counters">
    <button onClick={addCounterC}>Add Counter</button>
    {counters.map((counter, index) => (
      <div className="counter" key={index}>
        <h1>Counter</h1>
        <h2>value:{counter}</h2>
        <button onClick={() => incrementC(index)}>+</button>
        <button onClick={() => decrementC(index)} >-</button>
        <button onClick={() => remCounterC(index)} >Remove</button>
      </div>
    ))
    }
  </div>
)

const mapStateToProps = state => {
  return {
    counters: state.counters
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCounterC: () => dispatch(addCounter()),
    remCounterC: index => dispatch(remCounter(index)),
    incrementC: index => dispatch(increment(index)),
    decrementC: index => dispatch(decrement(index))
  }
}

const Counters = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountersP);

export default Counters
