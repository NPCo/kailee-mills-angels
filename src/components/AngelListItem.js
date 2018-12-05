import React from 'react'

export default (props) => (
  <div key={props._id} style={{ background: props.color, padding: '20px' }}>
    <h3 style={{ margin: 0 }} >{props.name}</h3>
  </div>
)