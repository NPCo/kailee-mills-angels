import React, { Component } from 'react'
import { Form, Text } from 'informed'

export default class AngelEditForm extends Component {


  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div className="edit-angel-form" style={{ backgroundColor: this.props.color }}>
        <Form 
          onChange={formState => console.log('edited', formState)}
          onSubmit={formState => console.log('submitted', formState)}>
          <label>
            Name:
            <Text field="angel-name" />
          </label>
          <button type="submit">Submit</button>
        </Form>
      </div>
    )
  }
}