import React, { Component } from 'react'
import AngelGrid from './AngelGrid.js'

export default class EditAngelGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      angels: this.props.angels
    }
  }

  render() {
    return (
      <>
        <h1>Heck!</h1>
        <AngelGrid width={250} height={150} angels={this.state.angels} />
      </>
    )
  }
}