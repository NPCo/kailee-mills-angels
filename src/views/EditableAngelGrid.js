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
    this.editAngel = this.editAngel.bind(this)
  }

  focus(_id) {
    this.setState({
      focusId: _id
    })
  }

  editAngel(values) {

    const { angels, focusId } = this.state

    console.log('values', values)
    const index = angels.findIndex(a => a._id === focusId)
    const prevAngel = angels[index]
    console.table({ values, prevAngel })
    const newAngel = Object.assign(prevAngel, values)
    console.log('new angel:', newAngel)

    this.setState({
      angels: [
        ...angels.slice(0, index),
        newAngel,
        ...angels.slice(index + 1)
      ]
    })
  }

  render() {

    const { angels, focusId } = this.state

    return (
      <div className="workspace-layout">
        <div className="edit-live-demo">
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
            ? <AngelEditForm 
              onValueChange={this.editAngel}
              onSubmit={formState => console.log('submitted', formState)}
              {...angels.find(a => a._id === focusId)} />
            : <></>
        }
      </div>
    )
  }
}