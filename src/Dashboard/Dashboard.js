import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './Dashboard.scss'
import Tabs from '../components/Tabs/Tabs'

import { TAB_LIST } from './const'
class Dashboard extends Component {
	render() {
		return (
			<div className="dashboard">
				{/* <div className="content flex1">
					
				</div> */}
				{TAB_LIST.map((tab) =>
					tab.component ? (
						<Route
							key={tab.path}
							path={tab.path}
							component={tab.component}
						></Route>
					) : null
				)}
				<Tabs data={TAB_LIST} />
			</div>
		)
	}
}
export default Dashboard
