import React, { Component } from 'react'

import AngelGrid from './AngelGrid.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const angels = () => fetch('http://localhost:3000/api/angel')
  .then(res => res.json())
  .then(json => json.data)

const angelGrid = () => <AngelGrid rows={3} columns={4} width={250} height={150} angels={angels} />

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className="angel-container">
            <Route path="/" exact component={angelGrid} />
            <Route path="/edit" component={() => <h2>Hello there!</h2>} />
        </div>
      </Router>
    )
  }
}
