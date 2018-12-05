import React, { Component } from 'react'
import AngelGrid from './AngelDisplay.js'
import AngelListItem from '../components/AngelListItem.js'

export default class EditAngelGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      angels: this.props.angels
    }
  }

  render() {
    return (
      <div className="workspace-layout">
        <div style={{ gridArea: 'demo' }}>
          <AngelGrid width={250} height={150} angels={this.state.angels} />
        </div>
        <div style={{ background: '#DDD', gridArea: 'side' }}>
          { this.state.angels.map((a) => <AngelListItem {...a} />) }
        </div>
        <div style={{ background: '#999', gridArea: 'edit' }}>

        </div>
      </div>
    )
  }
}