import React, { Component } from 'react'

export default class AngelEditForm extends Component {


  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="edit-angel-form" style={{ backgroundColor: this.props.color }}>
        <form>
          <label for="angel-name">Name:</label>
          <input type="text" id="angel-name" />
        </form>
      </div>
    )
  }
}