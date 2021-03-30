import Setting from '../Setting/Setting'
import Dashboard from '../../Dashboard/Dashboard'
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
		name: 'dashboard',
		component: Dashboard,
	},
]
export default router
