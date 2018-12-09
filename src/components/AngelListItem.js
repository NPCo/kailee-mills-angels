import React from 'react'

export default props => (
  <div className="angel-list-item clickable" onClick={props.onClick} style={{ backgroundColor: props.color }}>
    <h3 style={{
      margin: 0,
      fontStyle: props.name ? 'normal' : 'italic'
    }}>{props.name || 'Blank'}</h3>
  </div>
)