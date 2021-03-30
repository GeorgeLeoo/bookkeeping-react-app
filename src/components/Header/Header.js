import React, { Component } from 'react'
import './Header.scss'
import config from '../../config'
import { withRouter } from 'react-router-dom'

class Header extends Component {
	constructor(props) {
		super()
		this.handlerBack = this.handlerBack.bind(this)
	}
	handlerBack() {
		this.props.history.goBack()
	}
	render() {
		return (
			<div className="header">
				<span className="left">
					{this.props.back ? (
						<img
							className="back-icon"
							src={
								config.imgHost + '/assets/toolbar_navigation_icon_normal.png'
							}
							alt=""
							onClick={this.handlerBack}
						></img>
					) : (
						''
					)}
				</span>
				<span>{this.props.title}</span>
				<span className="right">{this.props.right}</span>
			</div>
		)
	}
}

export default withRouter(Header)
