import React, { Component } from 'react'

export default class AngelElement extends Component {

	constructor(props) {
		super(props)

		this.state = {
			hovered: false,
			selected: false,
			zIndex: 0,
		}
		this.enabled = !!this.props.thumbnail

		this.expand = this.expand.bind(this)
		this.contract = this.contract.bind(this)
		this.select = this.select.bind(this)
	}

	componentWillUnmount() {
		this.props.trigger()
	}

	expand() {
		if (this.enabled && !this.state.selected)
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
			
		this.setState({
			selected: true
		})

		this.contract()
		this.props.onSelected()
	}

	render() {

		const transitionStyles = {
			exiting: {
				marginTop: this.props.expandMargin.top,
				marginLeft: this.props.expandMargin.left,
				marginBottom: this.props.expandMargin.bottom,
				marginRight: this.props.expandMargin.right,
				background: this.props.color,
				zIndex: 1
			},
		}
		
		return (
			<div className="transition-smooth"
				onMouseEnter={this.expand}
				onMouseLeave={this.contract}
				onClick={this.select}
				style={{
					cursor: (this.enabled) ? 'pointer' : 'default',
					background: this.props.thumbnail && `url(${this.props.thumbnail}) no-repeat 50% 50%`,
					backgroundSize: this.props.thumbnailFit || 'auto',
					backgroundColor: this.props.color,
					transform: `scale(${this.state.hovered ? 1.1 : 1.0})`,
					zIndex: this.state.zIndex,
					gridArea: [
						+this.props.y,
						+this.props.x,
						+this.props.y + (+this.props.h || 1),
						+this.props.x + (+this.props.w || 1)
					].join(' / '),
					...transitionStyles[this.props.transitionState]
			}}></div>
		)
	}
}