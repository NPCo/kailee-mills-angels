import React, { Component } from 'react'

export default class AngelGrid extends Component {

  render() {
    return (
      <div 
      className="angels"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${this.props.columns || 4}, ${this.props.width || 100}px)`,
        gridTemplateRows: `repeat(${this.props.rows || 3}, ${this.props.height || 100}px)`,
        gridGap: `10px`
      }}>
        {this.props.children}
      </div>
    )
  }
}