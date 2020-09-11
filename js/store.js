import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
  state: {
    pagePath: sessionStorage.getItem('PATH') || 'datas'
  },
  mutations: {
    setPath (state, path) {
      state.pagePath = path
    }
  }
})

export default {
  store
}
