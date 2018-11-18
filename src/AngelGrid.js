import React, { Component } from 'react'

import Angel from './Angel.js'
import './angel.css'

export default class AngelGrid extends Component {

  state = {
    selectedIndex: -1
  }

  render() {

    const angel = Object.assign(
      { color: 'white', photo: '#', name: 'An error has occured', dates: '', bio: [] },
      this.props.angels[this.state.selectedIndex]
    )

    return (this.state.selectedIndex === -1)
      ? (
        <div className="angels" style={{
          display: 'grid',
          gridTemplateColumns: `repeat(${this.props.columns || 4}, ${this.props.width || 100}px)`,
          gridTemplateRows: `repeat(${this.props.rows || 3}, ${this.props.height || 100}px)`,
          columnGap: `calc((100% - ${this.props.columns * this.props.width}px) / ${this.props.columns - 1})`,
          height: `${this.props.rows * (this.props.height + 10) - 10}px`,
          rowGap: '10px'
        }}>
          {
            this.props.angels
              .map((a, i) => 
              <Angel key={i} onSelected={() => this.setState({selectedIndex: i})} {...a} />)
          }
        </div>
      )
      : (
        <div className="angels" style={{
          backgroundColor: angel.color,
          height: `${this.props.rows * (this.props.height + 10) - 10}px`,
        }}>
          <div className="angel-expanded">
            <div className="angel-photo">
              <img alt={angel.name} src={angel.photo} />
            </div>
            <div className="angel-title">
              <span className="angel-name">{angel.name}</span>
              <span>{angel.dates}</span>
            </div>
            <div className="angel-bio">
              {angel.bio.map((text, i) => <p key={i}>{text}</p>)}
            </div>
          </div>
        </div>
      )
  }
}