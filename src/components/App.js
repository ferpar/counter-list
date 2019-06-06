import React from 'react'
import {hot} from 'react-hot-loader'
import Counters from './Counters.js'

class App extends React.Component {
  state = {
    count: 0
  }

  render() {
    const {count} = this.state;
    return (
      <div>
      <Counters />
      </div>
    )
  }
}

export default hot(module)(App)
