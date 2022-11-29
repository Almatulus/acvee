import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: []
  },
  getters: {
    COUNTRIES(state){
        return state.countries
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
