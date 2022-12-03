import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import myprojectsstore from './store/myprojectsstore'

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
export const show = new Vue()
Vue.use(Vuelidate)
Vue.use(VueAxios, axios)

new Vue({
  router,
  store,
  myprojectsstore,
  render: h => h(App)
}).$mount('#app')
