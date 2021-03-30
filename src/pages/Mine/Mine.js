import React, { Component } from 'react'

import { withRouter } from 'react-router-dom'

class Mine extends Component {
	constructor(props) {
		super()
		this.handlerToSetting = this.handlerToSetting.bind(this)
	}
	handlerToSetting() {
		this.props.history.push('/setting')
	}
	render() {
		return (
			<div>
				<p onClick={this.handlerToSetting}>mine</p>
			</div>
		)
	}
}

export default withRouter(Mine)
