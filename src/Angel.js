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
		this.select = this.select.bind(this)
	}

	componentWillUnmount() {
		console.log('hello')
		this.props.trigger()
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

	select() {
		if (!this.enabled)
			return
		
		console.log('flag')
		this.props.onSelected()
	}

	render() {
		const transitionStyles = {
			exiting: {
				background: this.props.color
			},
		}
		console.log('this.props.transitionState', this.props.transitionState)
		return (
			<div className="angel-element"
				onMouseEnter={this.expand}
				onMouseLeave={this.contract}
				onClick={this.select}
				style={{
					cursor: (this.enabled) ? 'pointer' : 'default',
					background: `url(${this.props.thumbnail}) no-repeat 50% 50%`,
					backgroundColor: this.props.color,
					transform: `scale(${this.state.hovered ? 1.1 : 1.0})`,
					zIndex: this.state.zIndex,
					gridArea: [
						this.props.y,
						this.props.x,
						this.props.y + (this.props.h || 1),
						this.props.x + (this.props.w || 1)
					].join(' / '),
					...transitionStyles[this.props.transitionState]
			}}></div>
		)
	}
}