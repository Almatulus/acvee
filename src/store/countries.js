import { url } from 'inspector'
import Vue from 'vue'
import { axios } from 'vue/types/umd'
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
    SET_COUNTRIES_TO_STATE: (state, countries) => {
        state.countries = countries
    }
  },
  actions: {
    GET_COUNTRIES_FROM_API({commit}) {
        return axios('http://localhost:8000api/v1/borrower/countries/ ', {
            method: "GET"
        })
        .then((countries) => {
            commit('SET_COUNTRIES_TO_STATE', countries.data)
            return countries
        })
    }
  },
  modules: {
  }
})
