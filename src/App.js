import React, { Component } from 'react'

import AngelDisplay from './views/AngelDisplay.js'
import EditableAngelGrid from './views/EditableAngelGrid.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const angels = () => fetch('http://localhost:3000/api/angel')
  .then(res => res.json())
  .then(json => json.data)

const angelGrid = () => (
  <div className="three-by-three">
    <div className="middle-center">
      <AngelDisplay width={250} height={150} angels={angels} />
    </div>
  </div>
)

const draftAngels = () => fetch('http://localhost:3000/api/angel?isDraft=true')
  .then(res => res.json())
  .then(json => json.data)

const publish = body => fetch('http://localhost:3000/api/angel', { body })
const saveDraft = body => fetch('http://localhost:3000/api/angel?isDraft=true', { body })

const editInterface = () => <EditableAngelGrid angels={draftAngels} publish={publish} saveDraft={saveDraft} />

export default class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Route path="/" exact component={angelGrid} />
          <Route path="/edit" component={editInterface} />
        </>
      </Router>
    )
  }
}
