import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import './App.scss'

import router from './router'

export default class App extends Component {
	constructor() {
		super()
		this.state = {}
	}
	render() {
		return (
			<Router>
				<Switch>
					{router.map((route) =>
						route.path ? (
							<Route
								key={route.name}
								path={route.path}
								component={route.component}
							/>
						) : (
							<Route key={route.name} component={route.component} />
						)
					)}
				</Switch>
			</Router>
		)
	}
}
