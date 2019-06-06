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
  dispatch
}) => (
  <div className="counters">
    <button onClick={
      () => dispatch({
        type: 'ADD_COUNTER'
      })
    }>Add Counter</button>
  {
    console.log(counters)
  }
    {counters.map((counter, index) => (
      <div className="counter" key={index}>
        <h1>Counter</h1>
        <h2>value:{counter}</h2>
        <button onClick={() => {
          console.log(index)
          dispatch({
            type:'INCREMENT',
            index
          })
        }}>+</button>
        <button >-</button>
        <button >Remove</button>
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

//const mapDispatchToProps = dispatch => {
//  return {
//    addCounterC: () => dispatch(addCounter()),
//    remCounterC: () => dispatch(remCounter(index)),
//    incrementC: () => dispatch(increment()),
//    decrementC: index => dispatch(decrement(index))
//  }
//}


const Counters = connect(
  mapStateToProps,
  null
)(CountersP);

export default Counters
