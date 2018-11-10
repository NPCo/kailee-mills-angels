import React, { Component } from 'react'

export default class Angel extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hovered: false
		}

		this.expand = this.expand.bind(this)
		this.contract = this.contract.bind(this)
	}

	expand() {
		this.setState({
			hovered: true
		})
	}

	contract() {
		this.setState({
			hovered: false
		})
	}

	render() {
		console.log(this.props.x)
		return (
			<div 
				onMouseEnter={this.expand}
				onMouseLeave={this.contract}
				style={{
					background: this.props.background || `url(${this.props.backgroundImage})`,
					transform: `scale(${this.state.hovered ? 1.1 : 1.0})`,
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