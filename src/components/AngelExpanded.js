import React from 'react'
import * as Markdown from 'react-markdown'

export default ({ angel, height, exit }) => (
  <div style={{ backgroundColor: angel.color, height }} className="angel-expanded">
    <div className="angel-photo fade-in">
      <img alt={angel.name} src={angel.photo} />
    </div>
    <div className="angel-title fade-in">
      <span className="angel-name">{angel.name}</span>
      <span className="angel-dates">{angel.dates}</span>
      <div className="angel-exit clickable" onClick={exit}><div className="close icon"></div></div>
    </div>
    <div className="angel-bio fade-in">
      <Markdown source={angel.bio} />
    </div>
  </div>
)