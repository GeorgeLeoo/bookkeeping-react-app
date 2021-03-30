import React, { Component } from 'react'
import './TabItem.scss'
import config from '../../config'

import { withRouter } from 'react-router-dom'

class TabItem extends Component {
	constructor(props) {
		super()
		this.handlerTabItemClick = this.handlerTabItemClick.bind(this)
	}
	handlerTabItemClick() {
		this.props.history.push(this.props.data.path)
		this.props.tabItemClick()
	}
	render() {
		return (
			<div className="tab-item col" onClick={this.handlerTabItemClick}>
				<img
					className={this.props.data.value === 'add' ? 'add-icon' : 'icon'}
					src={
						config.imgHost +
						(this.props.selected
							? this.props.data.selectedIconPath
							: this.props.data.iconPath)
					}
					alt=""
				/>
				<p className={this.props.data.value === 'add' ? 'add-label' : 'label'}>
					{this.props.data.label}
				</p>
			</div>
		)
	}
}

export default withRouter(TabItem)
