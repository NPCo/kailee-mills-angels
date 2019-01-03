import React from 'react'

import { Form, Text, Select, Option } from 'informed'

const FitOptions = [
  <Option key="auto" value="auto">Auto</Option>,
  <Option key="cover" value="cover">Cover</Option>,
  <Option key="contain" value="contain">Contain</Option>,
  <Option key="initial" value="initial">Initial</Option>,
  <Option key="stretch" value="100% 100%">Stretch</Option>,
]

export default ({ onValueChange, _id, ...angel }) => (
  <Form
    key={`form-${_id}`}
    initialValues={angel}
    onValueChange={onValueChange}>
    <div className="angel-form-info">
      <label htmlFor="angel-name" style={{ gridColumn: '1 / 2' }}>Name:</label>
      <Text field="name" id="angel-name" />

      <label htmlFor="angel-dates" style={{ gridColumn: '1 / 2' }}>Dates:</label>
      <Text field="dates" id="angel-dates" placeholder="e.g. 2000 - 2000" />

      <label htmlFor="angel-color" style={{ gridColumn: '1 / 2' }}>Color:</label>
      <Text field="color" id="angel-color" placeholder="e.g. #d7f5e1" />

      <label htmlFor="angel-photo" style={{ gridColumn: '1 / 2' }}>Biography Photo:</label>
      <Text field="photo" id="angel-photo" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />

      <label htmlFor="angel-thumbnail" style={{ gridColumn: '1 / 2' }}>Thumbnail Photo:</label>
      <Text field="thumbnail" id="angel-thumbnail" placeholder="e.g. https://static.wixstatic.com/media/img.jpg" />

      <label htmlFor="angel-photo-fit" style={{ gridColumn: '3 / 4', gridRow: '4 / 5' }}>Photo fit:</label>
      <Select field="photoFit" id="angel-photo-fit" style={{ gridColumn: '4 / 5', gridRow: '4 / 5' }}>
        {FitOptions}
      </Select>

      <label htmlFor="angel-thumbnail-fit" style={{ gridColumn: '3 / 4' }}>Thumbnail fit:</label>
      <Select field="thumbnailFit" id="angel-thumbnail-fit" >
        {FitOptions}
      </Select>

    </div>
  </Form>
)