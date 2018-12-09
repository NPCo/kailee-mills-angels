import React, { Component } from 'react'
import AngelGrid from './AngelDisplay.js'
import AngelListItem from '../components/AngelListItem.js'

export default class EditAngelGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      angels: this.props.angels,
      focusId: undefined
    }

    this.focus = this.focus.bind(this)
  }

  focus(_id) {
    this.setState({
      focusId: _id
    })
  }

  render() {
    return (
      <div className="workspace-layout">
        <div style={{ gridArea: 'demo' }}>
          <AngelGrid width={250} height={150} angels={this.state.angels} />
        </div>
        <div className="angel-list">
          { 
            this.state.angels.map(a =>
              <AngelListItem key={a._id} {...a} onClick={() => this.focus(a._id)} />
            )
          }
        </div>
        { 
          this.state.focusId
            ? <div className="edit-angel-form"></div>
            : <></>
        }
      </div>
    )
  }
}