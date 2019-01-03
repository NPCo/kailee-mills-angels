import React from 'react'

import { Form, TextArea } from 'informed'

export default ({ onValueChange, _id, ...angel }) => (
  <Form
    key={`form-${_id}`}
    initialValues={angel}
    onValueChange={onValueChange}>
    <div className="angel-form-bio">
      <label htmlFor="angel-bio">Biography:</label>
      <TextArea field="bio" id="angel-bio" style={{ height: '215px' }} />
    </div>
  </Form>
)