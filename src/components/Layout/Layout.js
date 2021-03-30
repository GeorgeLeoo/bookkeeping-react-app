import React, { Component } from 'react'

import Header from '../Header/Header'

import './Layout.scss'

class Layout extends Component {
	constructor(props) {
		super()
	}
	render() {
		return (
			<div className="layout">
				{this.props.showHeader || this.props.title ? (
					<Header title={this.props.title} back={this.props.back} />
				) : null}
				<div className="body">{this.props.children}</div>
			</div>
		)
	}
}

export default Layout
