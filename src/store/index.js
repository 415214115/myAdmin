import Vue from 'vue'
import Vuex from 'vuex'
import setTing from '../appSetting.js'
Vue.use(Vuex)
import routers from './navSlider.js'
export default new Vuex.Store({
	state: {
		routers: routers,
		layOutSetTing: setTing
	},
	mutations: {},
	actions: {},
	modules: {}
})
