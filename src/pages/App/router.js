import Setting from '../Setting/Setting'
import Layout from '../../Layout/Layout'
import Add from '../Add/Add'

const router = [
	{
		name: 'setting',
		path: '/setting',
		component: Setting,
		title: '设置',
	},
	{
		name: 'add',
		path: '/add',
		component: Add,
		title: '记账',
	},
	{
		name: 'layout',
		component: Layout,
	},
]
export default router
