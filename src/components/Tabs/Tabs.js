import React, { Component } from 'react'

import './Tabs.scss'

import TabItem from '../TabItem/TabItem'

class Tabs extends Component {
	constructor(props) {
		super()
		this.state = {
			selected: 'detail',
		}
		this.handlerTabItemClick = this.handlerTabItemClick.bind(this)
	}
	handlerTabItemClick({ value }) {
		this.setState({ selected: value })
	}
	render() {
		return (
			<div className="tabs row">
				{this.props.data.map((tab) => (
					<TabItem
						key={tab.label}
						data={tab}
						selected={tab.value === this.state.selected}
						tabItemClick={this.handlerTabItemClick.bind(this, tab)}
					/>
				))}
			</div>
		)
	}
}

export default Tabs
