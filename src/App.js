import React, { Component } from 'react'
import Angel from './Angel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="angels">
            <Angel background="red" x={1} y={1} />
            <Angel background="red" x={1} y={2} />
            <Angel background="red" x={1} y={3} />
            <Angel background="orange" x={2} y={1} h={2} />
            <Angel background="green" x={2} y={3} w={2} />
            <Angel background="yellow" x={3} y={1} />
            <Angel background="purple" x={3} y={2} w={2} />
            <Angel background="blue" x={4} y={1} />
            <Angel background="pink" x={4} y={3} />
          </div>
        </div>
      </div>
    )
  }
}

export default App
