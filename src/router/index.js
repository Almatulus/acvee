import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {layout: 'borrower'},
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'auth'},
    component: () => import('../views/Login.vue')
  },
  {
    path: '/register/1',
    name: 'register-1',
    meta: {layout: 'auth'},
    component: () => import('../views/registration/Register1.vue')
  },
  {
    path: '/register/2',
    name: 'register-2',
    meta: {layout: 'auth'},
    component: () => import('../views/registration/Register2.vue')
  },
  {
    path: '/myrequest',
    name: 'myrequest',
    meta: {layout: 'borrower'},
    component: () => import('../views/MyRequests.vue')
  },
  {
    path: '/datarequest',
    name: 'datarequest',
    meta: {layout: 'borrower'},
    component: () => import('../views/DataRequest.vue')
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    meta: {layout: 'borrower'},
    component: () => import('../views/QuestionnaireTemplate.vue')
  },
  {
    path: '/investor/my-projects',
    name: 'investor-myProjects',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorMyProjects.vue')
  },
  {
    path: '/investor/financial-information',
    name: 'investor-financialInformation',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorFinancialInformation.vue')
  },
  {
    path: '/investor/questionnaire',
    name: 'investor-questionnaire',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorQuestionnaire.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
