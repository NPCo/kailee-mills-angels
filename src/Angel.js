import React, { Component } from 'react'

export default class Angel extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hovered: false,
			revealed: false,
			zIndex: 0
		}

		this.expand = this.expand.bind(this)
		this.contract = this.contract.bind(this)
		this.reveal = this.reveal.bind(this)
	}

	expand() {
		this.setState({
			hovered: true,
			zIndex: 1
		})
	}

	contract() {
		if (!this.state.revealed)
			this.setState({
				hovered: false,
				zIndex: 0
			})
	}

	reveal() {
		this.setState({
			revealed: true,
			zIndex: 1
		})
	}

	render() {
		return (
			<div 
				onMouseEnter={this.expand}
				onMouseLeave={this.contract}
				onClick={this.reveal}
				style={{
					background: this.props.background || `url(${this.props.backgroundImage})`,
					transform: `scale(${this.state.hovered ? 1.1 : 1.0})`,
					transition: '1s',
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