import React from 'react'

export default ({ angel, height, exit }) => (
  <div style={{ backgroundColor: angel.color, height }}>
    <div className="fade-in">
      <div className="angel-photo">
        <img alt={angel.name} src={angel.photo} />
      </div>
      <div className="angel-title">
        <span className="angel-name">{angel.name}</span>
        <span className="angel-dates">{angel.dates}</span>
        <div className="angel-exit" onClick={exit}><div className="close icon"></div></div>
      </div>
      <div className="angel-bio">
        {angel.bio.map((text, i) => <p key={i}>{text}</p>)}
      </div>
    </div>
  </div>
)