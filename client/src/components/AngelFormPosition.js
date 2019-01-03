import React from 'react'

import { Form, Text } from 'informed'

export default ({ onValueChange, removeAngel, _id, ...angel }) => (
  <Form
    key={`form-${_id}`}
    initialValues={angel}
    onValueChange={onValueChange}
    removeAngel={removeAngel}>
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
  </Form>
)