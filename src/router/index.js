import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
Vue.use(VueRouter)

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
		children: [{
			path: '/test',
			name: 'test',
			component: () => import('../views/layout.vue'),
			// component: layout,
			// redirect: '/test/index',
			meta: {
				title: '首页2',
				icon: 'el-icon-location'
			},
			children: [
				{
					path: "/test/index",
					name: "defaultPage",
					component: () => import('../views/layout.vue'),
					meta: {
						title: '专享',
						icon: 'el-icon-location'
					},
					children: [{
						path: "/test/index/indexall",
						name: "defaultPage123",
						component: () => import("../views/test/index.vue"),
						meta: {
							title: '专享福利11111',
							icon: 'el-icon-location'
						}
					}]
				},
				{
					path: "/test/hahahaha",
					name: "defaultPage1",
					component: () => import("../views/test/test.vue"),
					meta: {
						title: '专享福利',
						icon: 'el-icon-location'
					}
				}
			]
		}]

	},


]

export const classifyRouter = [
	// 	{
	// 	path: "hahahaha",
	// 	name: "defaultPage2",
	// 	component: () => import("../views/test/test.vue"),
	// 	meta: {
	// 		title: '专享福利3453465456',
	// 		icon: 'el-icon-location'
	// 	}
	// },
]

const router = new VueRouter({
	routes
})

window.router = router

export default router
