import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
      myProjects : []
    },
    getters: {
      MYPROJECTS(state){
        return state.myProjects
      }
    },
    mutations: {
        SET_MYPROJECTS_TO_STATE: (state, myProjects) => {
            state.myProjects = myProjects
        }
    },
    actions: {
      GET_MYPROJECTS_FROM_API({commit}){
        return axios.get('127.0.0.1:8000/api/v1/borrower/my-projects/', {
            method: "GET"
        })
        .then((myProjects) => {
            commit('SET_MYPROJECTS_TO_STATE')
            return myProjects
        })
      }
    },
    modules: {
    }
  })