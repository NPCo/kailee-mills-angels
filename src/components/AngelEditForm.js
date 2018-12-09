import React from 'react'

export default (props) => console.log(props) || (
  <div className="edit-angel-form">
    <h1>{props.name || 'Blank'}</h1>
  </div>
)