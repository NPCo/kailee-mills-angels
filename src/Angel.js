import React, { Component } from 'react'

export default class Angel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.x)
        return (
            <div style={{
                background: this.props.background || `url(${this.props.backgroundImage})`,
                gridArea: `${this.props.y} / ${this.props.x} / ${this.props.y + (this.props.h || 1)} / ${this.props.x + (this.props.w || 1)}`

            }}></div>
        )
    }
}