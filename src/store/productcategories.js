import state from './state.js'
import mutations from './mutations.js'
import actions from './actions.js'
import getters from './getters.js'

export default new Vuex.Store({
  state: {
    productCategories: []
  },
  getters: {
    PRODUCT_CATEGORIES(state){
      return state.productCategories
  } 
  },
  mutations: {
    SET_PRODUCT_CATEGORIES_TO_STATE: (state, productCategories) => {
      state.productCategories = productCategories
  },
  },
  actions: {
    GET_PRODUCT_CATEGORIES_FROM_API({commit}) {
      return axios('http://127.0.0.1:8000/api/v1/borrower/category/', {
            method: "GET"
      })
      .then((productCategories) => {
            commit('SET_PRODUCT_CATEGORIES_TO_STATE', productCategories.data)
            return productCategories
      })
    }
  },
  modules: {
  }
})