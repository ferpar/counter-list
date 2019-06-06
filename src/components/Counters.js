import React from 'react'
import { connect } from 'react-redux'

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
        <button onClick={() => {
          dispatch({
            type:'DECREMENT',
            index
          })
        }} >-</button>
        <button onClick={() => {
          dispatch({
            type: 'REM_COUNTER',
            index
          })
        }} >Remove</button>
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

const Counters = connect(
  mapStateToProps,
  null
)(CountersP);

export default Counters
