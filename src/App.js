import React, { Component } from 'react'

import AngelDisplay from './views/AngelDisplay.js'
import EditableAngelGrid from './views/EditableAngelGrid.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const ANGEL_ENDPOINT = 'http://localhost:3000/api/angel'

const angels = () => fetch(ANGEL_ENDPOINT)
  .then(res => res.json())
  .then(json => json.data)

const angelGrid = () => (
  <div className="three-by-three">
    <div className="middle-center">
      <AngelDisplay width={250} height={150} angels={angels} />
    </div>
  </div>
)

const draftAngels = () => fetch(`${ANGEL_ENDPOINT}?isDraft=true`)
  .then(res => res.json())
  .then(json => json.data)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const publish = body => fetch(ANGEL_ENDPOINT, { method: 'DELETE', headers, body })
  .then(() => fetch(ANGEL_ENDPOINT, { method: 'POST', headers, body }))
  .then(() => saveDraft())

const saveDraft = body => fetch(`${ANGEL_ENDPOINT}?isDraft=true`, { method: 'DELETE', headers, body })
  .then(() => fetch(`${ANGEL_ENDPOINT}?isDraft=true`, { method: 'POST', headers, body }))

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
