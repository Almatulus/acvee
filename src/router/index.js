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
    path: '/register/4',
    name: 'register-4',
    meta: {layout: 'auth'},
    component: () => import('../views/registration/Register4.vue')
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
    name: 'scoring',
    meta: {layout: 'borrower'},
    component: () => import('../components/borrower/Scoring')
  },
  {
    path: '/scoring/after',
    name: 'scoring-after',
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/BorrowerAfterQuestionnaire.vue')
  },
  {
    path: '/notifications',
    name: 'notifications',
    meta: {layout: 'borrower'},
    component: () => import('../views/Borrower/BorrowerNotifications.vue')
  },
  {
    path: '/questionnaire',
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
    path: '/myrequest/stages/:id',
    name: 'myrequest-stages',
    params: true,
    meta: {layout: 'borrower'},
    component: () => import('../components/myrequests/RequestStages.vue')
  },
  {
    path: '/myrequest/documents/:id',
    name: 'myrequest-documents',
    params: true,
    meta: {layout: 'borrower'},
    component: () => import('../components/myrequests/RequestStages.vue')
  },
  {
    path: '/myrequest/project-details/:id',
    name: 'myrequest-project-details',
    params: true,
    meta: {layout: 'borrower'},
    component: () => import('../components/myrequests/RequestProjectDetails.vue')
  },
  {
    path: '/myrequest/project-documents/:id',
    name: 'myrequest-project-documents',
    params: true,
    meta: {layout: 'borrower'},
    component: () => import('../components/myrequests/RequestDocuments.vue')
  },
  {
    path: '/investor',
    name: 'investor',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/Investor.vue')
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
    path: '/investor/agreements',
    name: 'investor-agreements',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorDocuments.vue')
  },
  {
    path: '/investor/notifications',
    name: 'investor-notifications',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorNotifications.vue')
  },
  {
    path: '/investor/requests',
    name: 'investor-requests',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorRequests.vue')
  },
  {
    path: '/investor/requests/stages/:id',
    name: 'investor-requests-stages',
    params: true,
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorRequestStages.vue')
  },
  {
    path: '/investor/requests/documents/:id',
    name: 'investor-requests-documents',
    params: true,
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorDocuments.vue')
  },
  {
    path: '/investor/questionnaire/after',
    name: 'investor-questionnaire-after',
    meta: {layout: 'investor'},
    component: () => import('../views/Investor/InvestorAfterQuestionnaire.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/Admin.vue')
  },
  {
    path: '/admin/users',
    name: 'admin-users',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminUsers.vue')
  },
  {
    path: '/admin/projects/borrower',
    name: 'admin-projects-borrower',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminProjectsBorrower.vue')
  },
  {
    path: '/admin/projects/borrower/cabinet/:id',
    name: 'admin-projects-borrower-cabinet',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminBorrowerCabinet.vue')
  },
  {
    path: '/admin/loans',
    name: 'admin-loans',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminLoans.vue')
  },
  {
    path: '/admin/notifications',
    name: 'admin-notifications',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminNotifications.vue')
  },
  {
    path: '/admin/loan/:id',
    name: 'admin-loan',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminLoan.vue')
  },
  {
    path: '/admin/projects/investor',
    name: 'admin-projects-investor',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminProjectsInvestor.vue')
  },
  {
    path: '/admin/projects/investor/cabinet/:id',
    name: 'admin-projects-investor-cabinet',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminInvestorCabinet.vue')
  },
  {
    path: '/admin/investments',
    name: 'admin-investments',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminInvestments.vue')
  },
  {
    path: '/admin/investment/:id',
    name: 'admin-investment',
    meta: {layout: 'admin'},
    component: () => import('../views/Admin/AdminInvestment.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
