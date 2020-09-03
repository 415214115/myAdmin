import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Layout from '../views/layout'

import reconsitution from './reconsitution.js'
Vue.use(VueRouter)

const classifyRouter = {
	path: "hahahaha",
	name: "defaultPage2",
	component: () => import("../views/test/test.vue"),
	meta: {
		title: '专享福利3453465456',
		icon: 'el-icon-location'
	}
}

export const routes = [{
		path: '/about',
		name: 'About',
		meta: {
			title: '首页1',
			icon: 'el-icon-location'
		},
		component: () => import('../views/About.vue')
	},
	{
		path: '/',
		name: 'layout',
		component: () => import('../layout/index.vue'),
		// redirect: '/test',
		children: [
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			classifyRouter,
			{
				path: 'test',
				name: 'test',
				component: Layout,
				// component: layout,
				// redirect: '/test/index',
				meta: {
					title: '首页2',
					icon: 'el-icon-location'
				},
				children: [{
						path: "index",
						name: "defaultPage",
						component: Layout,
						meta: {
							title: '专享',
							icon: 'el-icon-location'
						},
						children: [{
								path: "indexall",
								name: "defaultPage123",
								component: () => import("../views/test/index.vue"),
								hidden: true,
								meta: {
									title: '专享福利333333',
									icon: 'el-icon-location'
								}
							},
							{
								path: "home",
								name: "home",
								component: () => import("../views/Home.vue"),
								meta: {
									title: 'home11111',
									icon: 'el-icon-location'
								}
							}
						]
					},
					{
						path: "hahahaha",
						name: "defaultPage1",
						component: () => import("../views/test/test.vue"),
						meta: {
							title: '专享福利',
							icon: 'el-icon-location'
						}
					}
				]
			},
			classifyRouter
		]
	}
]



// routes = routes.concat(classifyRouter)
export const editRouter = reconsitution(routes)
const router = new VueRouter({
	routes
})

window.router = router

export default router
