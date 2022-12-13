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
    component: () => import('../views/Login/Login.vue')
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
    path: '/register/3',
    name: 'register-3',
    meta: {layout: 'auth'},
    component: () => import('../views/registration/Register3.vue')
  },
  {
    path: '/myrequest',
    name: 'myrequest',
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/BorrowerMyRequests.vue')
  },
  {
    path: '/datarequest',
    name: 'datarequest',
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/BorrowerDataRequest.vue')
  },
  {
    path: '/questionnaire',
    name: 'questionnaire',
    meta: {layout: 'borrower'},
    component: () => import('../components/borrower/Questionnaire.vue')
  },
  {
    path: '/scoring',
    name: 'questionnaire',
    meta: {layout: 'borrower'},
    component: () => import('../components/borrower/Scoring')
  },
  {
    path: '/myrequest/questionnaire',
    name: 'myrequest-questionnaire',
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/Questionnaire.vue')
  },
  {
    path: '/myrequest/request-document/:id',
    name: 'myrequest-request-document',
    params: true,
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/RequestDocument.vue')
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
  {
    path: '/admin/projects',
    name: 'admin-projects',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminProjects.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
