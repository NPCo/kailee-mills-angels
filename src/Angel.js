import React, { Component } from 'react'

export default class Angel extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{
                background: this.props.background,
                'grid-template-row': `${this.props.x} / ${this.props.x + this.props.w}`,
                'grid-template-column': `${this.props.y} / ${this.props.y + this.props.h}`
            }}></div>
        )
    }
}