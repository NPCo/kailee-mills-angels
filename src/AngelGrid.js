import React, { Component } from 'react'

export default class AngelGrid extends Component {

  constructor(props) {
    super(props)
    this.ref = React.createRef()
  }

  render() {
    return (
      <div
      className="angels"
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${this.props.columns || 4}, ${this.props.width || 100}px)`,
        gridTemplateRows: `repeat(${this.props.rows || 3}, ${this.props.height || 100}px)`,
        columnGap: `calc((100% - ${this.props.columns * this.props.width}px) / ${this.props.columns - 1})`,
        // rowGap: `calc((100% - ${this.props.rows * this.props.height}px) / ${this.props.rows - 1})`,
        rowGap: '10px'
      }}>
        {this.props.children}
      </div>
    )
  }
}