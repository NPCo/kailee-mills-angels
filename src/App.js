import React, { Component } from 'react'
import Angel from './Angel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="angels">
            <Angel background="red" x={0} y={1} w={2} h={1} />
            {/* <Angel background="orange" />
            <Angel background="yellow" />
            <Angel background="forestgreen" />
            <Angel background="darkred" />
            <Angel background="darkorange" />
            <Angel background="gold" />
            <Angel background="green" />
            <Angel background="maroon" />
            <Angel background="chocolate" />
            <Angel background="goldenrod" />
            <Angel background="darkgreen" /> */}
          </div>
        </div>
      </div>
    )
  }
}

export default App
