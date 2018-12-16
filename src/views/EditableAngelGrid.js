import React, { Component } from 'react'
import uuid from 'uuid'
import AngelGrid from './AngelDisplay.js'
import AngelListItem from '../components/AngelListItem.js'
import AngelEditForm from '../components/AngelEditForm.js'

const COLOR_LIST = [
  '#d7f5e1',
  '#deeeee',
  '#f17079'
]

export default class EditAngelGrid extends Component {

  constructor(props) {
    super(props)

    this.state = {
      angels: this.props.angels,
      focusId: null
    }

    this.focus = this.focus.bind(this)
    this.editAngel = this.editAngel.bind(this)
    this.newAngel = this.newAngel.bind(this)
    this.removeAngel = this.removeAngel.bind(this)
  }

  focus(_id) {
    this.setState({
      focusId: _id
    })
  }

  editAngel(values) {

    const { angels, focusId } = this.state

    const index = angels.findIndex(a => a._id === focusId)
    const prevAngel = angels[index]
    const newAngel = Object.assign(prevAngel, values)

    this.setState({
      angels: [
        ...angels.slice(0, index),
        newAngel,
        ...angels.slice(index + 1)
      ]
    })
  }

  newAngel() {
    const { angels } = this.state
    const _id = uuid()
    const color = COLOR_LIST[angels.length % COLOR_LIST.length]
    const columns = Math.max(...angels.map(a => +a.w + +a.x - 1))
    const rows = Math.max(...angels.map(a => +a.h + +a.y - 1))
    
    const slots = Array(columns * rows).fill(false)
    
    angels.forEach(a => {
      for (let x = a.x - 1; x < a.x + +a.w - 1; x++)
        for (let y = a.y - 1; y < a.y + +a.h - 1; y++)
          console.table({x, y}) || (slots[x * rows + y] = true)
    })

    console.log(slots)

    const firstOpen = slots.findIndex(occupied => !occupied)
    const x = firstOpen !== -1 
      ? (Math.floor(firstOpen / rows) + 1)
      : (columns > rows)
      ? 1
      : columns + 1

    const y = firstOpen !== -1 
      ? (firstOpen % rows + 1)
      : (columns > rows)
      ? rows + 1
      : 1
    

    this.setState({
      angels: angels.concat({ _id, color, x, y, w: 1, h: 1 }),
      focusId: _id
    })
  }

  removeAngel(_id) {
    this.setState({
      angels: this.state.angels.filter(a => a._id !== _id),
      focusId: null
    })
  }

  render() {

    const { angels, focusId } = this.state

    return (
      <div className="workspace-layout">
        <div className="edit-live-demo">
            <AngelGrid width={250} height={150} angels={angels} key={uuid()} />
        </div>
        <div className="angel-list">
          <div className="angel-list-item">
            <button onClick={() => this.newAngel()}>New Angel</button>
            <button onClick={() => console.log('save')}>Save Changes</button>
            <button onClick={() => console.log('publish')}>Publish</button>
          </div>
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
              removeAngel={() => this.removeAngel(focusId)}
              {...angels.find(a => a._id === focusId)} />
            : <></>
        }
      </div>
    )
  }
}