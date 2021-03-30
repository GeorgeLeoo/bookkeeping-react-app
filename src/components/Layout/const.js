import Detail from '../../pages/Detail/Detail'
import Chart from '../../pages/Chart/Chart'
import Social from '../../pages/Social/Social'
import Mine from '../../pages/Mine/Mine'

export const TAB_LIST = [
	{
		label: '明细',
		value: 'detail',
		path: '/detail',
		iconPath: '/assets/bottom_detail_normal.png',
		selectedIconPath: '/assets/bottom_detail_pressed.png',
		component: Detail,
	},
	{
		label: '图表',
		value: 'chart',
		path: '/chart',
		iconPath: '/assets/bottom_chart_normal.png',
		selectedIconPath: '/assets/bottom_chart_pressed.png',
		component: Chart,
	},
	{
		label: '记账',
		value: 'add',
		path: '/add',
		iconPath: '/assets/bottom_add_normal.png',
		selectedIconPath: '/assets/bottom_add_pressed.png',
	},
	{
		label: '社区',
		value: 'social',
		path: '/social',
		iconPath: '/assets/bottom_sns_normal.png',
		selectedIconPath: '/assets/bottom_sns_pressed.png',
		component: Social,
	},
	{
		label: '我的',
		value: 'mine',
		path: '/mine',
		iconPath: '/assets/bottom_me_normal.png',
		selectedIconPath: '/assets/bottom_me_pressed.png',
		component: Mine,
	},
]
