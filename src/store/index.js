import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    productCategories: [],
    myProjects : []
  },
  getters: {
    COUNTRIES(state){
        return state.countries
    },
    PRODUCTCATEGORIES(state) {
      return state.productCategories
    },
    MYPROJECTS(state){
      return state.myProjects
    }
  },
  mutations: {
    SET_COUNTRIES_TO_STATE: (state, countries) => {
        state.countries = countries
    },
    SET_PRODUCTCATEGORIES_TO_STATE: (state, productCategories) => {
        state.productCategories = productCategories
    },
    SET_MYPROJECTS_TO_STATE: (state, myProjects) => {
        state.myProjects = myProjects
    }
  },
  actions: {
    GET_COUNTRIES_FROM_API({commit}) {
        return axios('http://127.0.0.1:8000/api/v1/borrower/countries/', {
            method: "GET"
        })
        .then((countries) => {
            commit('SET_COUNTRIES_TO_STATE', countries.data)
            return countries
        })
    },
    GET_PRODUCTCATEGORIES_FROM_API({commit}) {
        return axios('http://127.0.0.1:8000/api/v1/borrower/category/', {
            method: "GET"
        })
        .then((productCategories) => {
            commit('SET_PRODUCTCATEGORIES_TO_STATE', productCategories.data)
            return productCategories
        })
    },
    GET_MYPROJECTS_FROM_API({commit}){
      return axios('http://127.0.0.1:8000/api/v1/borrower/my-projects/', {
          method: "GET"
      })
      .then((myProjects) => {
          commit('SET_MYPROJECTS_TO_STATE', myProjects.data)
          return myProjects
      })
    }
  },
  modules: {
  }
})
