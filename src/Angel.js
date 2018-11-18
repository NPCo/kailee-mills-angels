import React, { Component } from 'react'

export default class Angel extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hovered: false,
			zIndex: 0
		}
		this.enabled = !!this.props.thumbnail

		this.expand = this.expand.bind(this)
		this.contract = this.contract.bind(this)
	}

	expand() {
		if (this.enabled)
			this.setState({
				hovered: true,
				zIndex: 1
			})
	}

	contract() {
		if (this.enabled)
			this.setState({
				hovered: false,
				zIndex: 0
			})
	}

	render() {
		return (
			<div className="angel-element"
				onMouseEnter={this.expand}
				onMouseLeave={this.contract}
				onClick={this.enabled && this.props.onSelected}
				style={{
					cursor: (this.enabled) ? 'pointer' : 'default',
					background: `url(${this.props.thumbnail}) no-repeat 50% 50%`,
					backgroundColor: this.props.color,
					transform: `scale(${this.state.hovered ? 1.1 : 1.0})`,
					zIndex: this.state.zIndex,
					position: (this.state.revealed) ? 'relative' : 'static',
					gridArea: [
						this.props.y,
						this.props.x,
						this.props.y + (this.props.h || 1),
						this.props.x + (this.props.w || 1)
					].join(' / ')
			}}></div>
		)
	}
}