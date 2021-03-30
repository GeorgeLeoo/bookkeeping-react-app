import React, { Component } from 'react'
import Layout from '../../components/Layout/Layout'
import { settings } from './const'
import './Setting.scss'
import config from '../../config'
class Setting extends Component {
	render() {
		return (
			<Layout title="设置" back>
				{settings.map((setting, index) => (
					<div className="setting" key={index}>
						{setting.map((item) => (
							<div className="setting-item row" key={item.text}>
								<div className="row-vertical-center">
									<img
										className="setting-icon"
										src={config.imgHost + item.icon}
										alt=""
									></img>
								</div>
								<div className="row-vertical-center flex1 row setting-right">
									<p>{item.text}</p>
									<img
										className="more-arrow"
										src={config.imgHost + '/assets/more_arrow.png'}
										alt=""
									></img>
								</div>
							</div>
						))}
					</div>
				))}
			</Layout>
		)
	}
}

export default Setting
