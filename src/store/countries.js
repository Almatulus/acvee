import { url } from 'inspector'
import Vue from 'vue'
import { axios } from 'vue/types/umd'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    productCategories: []
  },
  getters: {
    COUNTRIES(state){
        return state.countries
    },
    PRODUCT_CATEGORIES(state){
        return state.productCategories
  }  
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
        state.countries = countries
        console.log(countries, 'dsadasfasfsa')
    },
    SET_PRODUCT_CATEGORIES_TO_STATE: (state, productCategories) => {
        state.productCategories = productCategories
        console.log(productCategories, 'dsadasfasfsa')
    }
  },
  actions: {
    GET_COUNTRIES_FROM_API({commit}) {
        return axios('http://localhost:8000/api/v1/borrower/countries/ ', {
            method: "GET"
        })
        .then((countries) => {
            commit('SET_COUNTRIES_TO_STATE', countries.data)
            return countries
        })
    },
    GET_PRODUCT_CATEGORIES_FROM_API({commit}) {
        return axios('http://localhost:8000/api/v1/borrower/countries/ ', {
            method: "GET"
        })
        .then((productCategories) => {
            commit('SET_PRODUCT_CATEGORIES_TO_STATE', productCategories.data)
            console.log(productCategories, 'dsadasfasfsa')
            return productCategories
        })
    },
  },
  modules: {
  }
})
