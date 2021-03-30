import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Layout from '../../components/Layout/Layout'
import './Mine.scss'

import config from '../../config'

import { MENU_LIST } from './const'
class Mine extends Component {
	constructor(props) {
		super()
		this.handlerToSetting = this.handlerToSetting.bind(this)
	}
	handlerToSetting() {
		this.props.history.push('/setting')
	}
	handlerMenuTab(menu) {
		this.props.history.push(menu.url)
	}
	render() {
		return (
			<Layout showHeader={false}>
				<div className="base-info">
					<div className="row">
						<div className="row">
							<img
								className="avatar"
								src={config.imgHost + '/assets/sk_vip_activity_user_icon1.png'}
								alt=""
							/>
							<span className="nickname">Georgeleeo</span>
						</div>
						<div className="row bill-total-days-content">
							<img
								className="bill-total-days-icon"
								src={
									config.imgHost + '/assets/sk_add_account_calendar_icon.png'
								}
								alt=""
							/>
							<span className="bill-total-days">打卡</span>
						</div>
					</div>
					<div className="stat row">
						<div className="stat-item">
							<p className="stat-item-count">0</p>
							<p className="stat-item-text">已连续打卡</p>
						</div>
						<div className="stat-item">
							<p className="stat-item-count">534</p>
							<p className="stat-item-text">记账总天数</p>
						</div>
						<div className="stat-item">
							<p className="stat-item-count">234</p>
							<p className="stat-item-text">记账总笔数</p>
						</div>
					</div>
				</div>
				<div className="function-content">
					<div className="menu row card">
						{MENU_LIST.map((menu) => {
							return (
								<div
									key={menu.text}
									className="menu-item"
									onClick={this.handlerMenuTab.bind(this, menu)}
								>
									<img
										className="menu-icon"
										src={config.imgHost + menu.icon}
										alt=""
									></img>
									<p className="menu-text">{menu.text}</p>
								</div>
							)
						})}
					</div>
					<div className="card bill">
						<div className="card-title row">
							<p className="card-title-text">账单</p>
							<div className="row-vertical-center">
								<img
									className="card-title-icon"
									src={config.imgHost + '/assets/more_arrow.png'}
									alt=""
								/>
							</div>
						</div>
						<div className="card-body row">
							<div className="bill-left row">
								<p className="bill-left-month">02月</p>
							</div>
							<div className="line"></div>
							<div className="bill-right row flex1">
								<div className="bill-right-item col">
									<p className="bill-right-item-text">收入</p>
									<p className="bill-right-item-money">0.00</p>
								</div>
								<div className="bill-right-item col">
									<p className="bill-right-item-text">支出</p>
									<p className="bill-right-item-money">0.00</p>
								</div>
								<div className="bill-right-item col">
									<p className="bill-right-item-text">结余</p>
									<p className="bill-right-item-money">0.00</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Layout>
		)
	}
}

export default withRouter(Mine)
