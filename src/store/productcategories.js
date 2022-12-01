import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productCategories: []
  },
  getters: {
    PRODUCTCATEGORIES(state){
        return state.productCategories;
    }  
  },
  mutations: {
    SET_PRODUCTCATEGORIES_TO_STATE: (state, productCategories) => {
        state.productCategories = productCategories
    },
  },
  actions: {
    GET_PRODUCTCATEGORIES_FROM_API({commit}){
        return axios('http://127.0.0.1:8000/api/v1/borrower/category/', {
            method: 'GET'
        })
        .then((productCategories) => {
            commit('SET_PRODUCTCATEGORIES_TO_STATE', productCategories)
        })
    }
  },
  modules: {
  }
})