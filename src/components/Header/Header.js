import React, { Component } from 'react'
import './Header.scss'
class Header extends Component {
	render() {
		return (
			<div className="header">
				<span className="left">{this.props.back ? 'BACK' : ''}</span>
				<span>{this.props.title}</span>
				<span className="right">right</span>
			</div>
		)
	}
}

export default Header
