import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from '../components/Header/Header'
import Tabs from '../components/Tabs/Tabs'

import { TAB_LIST } from './const'

class Layout extends Component {
	render() {
		return (
			<div className="page">
				<Header title="Title" />
				<div className="flex1">
					{TAB_LIST.map((tab) =>
						tab.component ? (
							<Route
								key={tab.path}
								path={tab.path}
								component={tab.component}
							></Route>
						) : null
					)}
				</div>
				<Tabs data={TAB_LIST} />
			</div>
		)
	}
}

export default Layout
