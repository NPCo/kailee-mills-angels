import React, { Component } from 'react'
import { Form, Text, TextArea } from 'informed'

export default class AngelEditForm extends Component {


  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.color }}>
        <Form 
          onChange={formState => console.log('edited', formState)}
          onSubmit={formState => console.log('submitted', formState)}>
          <div className="edit-angel-form">
            <div className="angel-form-info">
              <label for="angel-name">Name:</label>
              <Text field="angel-name" id="angel-name" />

              <label for="angel-dates">Dates:</label>
              <Text field="angel-dates" id="angel-dates" placeholder="e.g. 2000 - 2000" />

              <label for="angel-color">Color:</label>
              <Text field="angel-color" id="angel-color" placeholder="e.g. #d7f5e1" />

              <label for="angel-photo">Biography Photo:</label>
              <Text field="angel-photo" id="angel-photo" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />

              <label for="angel-thumbnail">Thumbnail Photo:</label>
              <Text field="angel-thumbnail" id="angel-thumbnail" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />
            </div>
            <div className="angel-form-bio">
              <label for="angel-bio">Biography:</label>
              <TextArea field="angel-bio" id="angel-bio" />
            </div>
            <div className="angel-form-info">
              <label for="angel-col">Column:</label>
              <Text field="angel-col" id="angel-col" />

              <label for="angel-row">Row:</label>
              <Text field="angel-row" id="angel-row" />

              <label for="angel-width">Width:</label>
              <Text field="angel-width" id="angel-width" />

              <label for="angel-height">Height:</label>
              <Text field="angel-height" id="angel-height" />

              <button type="submit" style={{ gridColumn: '1 / 3' }}>Submit</button>
            </div>
          </div>
        </Form>
      </div>
    )
  }
}