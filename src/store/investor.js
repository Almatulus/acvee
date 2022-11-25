import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    companyName: 'Nomadcom'
  },
  getters: {
    COMPANYNAME: state => {
        return state.companyName
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})