import React, { Component } from 'react'

export default class Angel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.x)
        return (
            <div style={{
                background: this.props.background,
                // gridColumn: `${this.props.x} / ${this.props.x + this.props.w}`,
                // gridRow: `${this.props.y} / ${this.props.y + this.props.h}`,
                gridArea: `${this.props.y} / ${this.props.x} / ${this.props.y + this.props.h} / ${this.props.x + this.props.w}`

            }}></div>
        )
    }
}