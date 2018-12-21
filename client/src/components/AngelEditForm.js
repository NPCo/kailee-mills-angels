import React from 'react'
import { Form, Text, TextArea } from 'informed'

export default ({ _id, onValueChange, removeAngel, ...angel }) => (
  <div style={{ backgroundColor: angel.color, gridArea: 'edit' }}>
    <Form
      key={`form-${_id}`}
      initialValues={angel}
      onValueChange={onValueChange}>
      <div className="edit-angel-form">
        <div className="angel-form-info">
          <label htmlFor="angel-name">Name:</label>
          <Text field="name" id="angel-name" />

          <label htmlFor="angel-dates">Dates:</label>
          <Text field="dates" id="angel-dates" placeholder="e.g. 2000 - 2000" />

          <label htmlFor="angel-color">Color:</label>
          <Text field="color" id="angel-color" placeholder="e.g. #d7f5e1" />

          <label htmlFor="angel-photo">Biography Photo:</label>
          <Text field="photo" id="angel-photo" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />

          <label htmlFor="angel-thumbnail">Thumbnail Photo:</label>
          <Text field="thumbnail" id="angel-thumbnail" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />
        </div>
        <div className="angel-form-bio">
          <label htmlFor="angel-bio">Biography:</label>
          <TextArea field="bio" id="angel-bio" />
        </div>
        <div className="angel-form-info">
          <label htmlFor="angel-col">Column:</label>
          <Text field="x" id="angel-col" />

          <label htmlFor="angel-row">Row:</label>
          <Text field="y" id="angel-row" />

          <label htmlFor="angel-width">Width:</label>
          <Text field="w" id="angel-width" />

          <label htmlFor="angel-height">Height:</label>
          <Text field="h" id="angel-height" />

          <button onClick={removeAngel} style={{ gridColumn: '1 / 3' }}>Delete</button>
        </div>
      </div>
    </Form>
  </div>
)