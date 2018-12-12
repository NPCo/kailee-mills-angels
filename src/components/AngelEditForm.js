import React, { Component } from 'react'

export default class AngelEditForm extends Component {


  constructor(props) {
    super(props)

    console.log('reloaded', props)

    this.state = {
      ...props.angel
    }
  }

  render() {
    return (
      <div className="edit-angel-form" style={{ backgroundColor: this.state.color }}>
        <h1>{this.state.name || 'Blank'}</h1>
      </div>
    )
  }
}