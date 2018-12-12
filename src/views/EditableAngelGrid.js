import React, { Component } from 'react'
import AngelGrid from './AngelDisplay.js'
import AngelListItem from '../components/AngelListItem.js'
import AngelEditForm from '../components/AngelEditForm.js'

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

    const { angels, focusId } = this.state

    return (
      <div className="workspace-layout">
        <div style={{ gridArea: 'demo' }}>
          <AngelGrid width={250} height={150} angels={angels} />
        </div>
        <div className="angel-list">
          { 
            angels.map(a =>
              <AngelListItem key={a._id} {...a} onClick={() => this.focus(a._id)} />
            )
          }
        </div>
        { 
          !!focusId
            ? <AngelEditForm angel={angels.find(a => a._id === focusId)} />
            : <></>
        }
      </div>
    )
  }
}