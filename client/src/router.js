import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'

import EmployeeView from './views/EmployeeView.vue'
import EmployeeEdit from './views/EmployeeEdit.vue'
import EmployeeCreate from './views/EmployeeCreate.vue'

import CompanyView from './views/CompanyView'
import CompanyCreate from './views/CompanyCreate.vue'
import CompanyEdit from './views/CompanyEdit.vue'

import TripView from './views/TripView.vue'
import TripCreate from './views/TripCreate.vue'
import TripEdit from './views/TripEdit.vue'

import ExpenceView from './views/ExpenceView.vue'
import ExpenceCreate from './views/ExpenceCreate.vue'
import ExpenceEdit from './views/ExpenceEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/EmployeeView',
      name: 'employeeView',
      component: EmployeeView,
      props: true
    },
    {
      path: '/EmployeeEdit',
      name: 'employeeEdit',
      component: EmployeeEdit,
      props: true
    },
    {
      path: '/EmployeeCreate',
      name: 'employeeCreate',
      component: EmployeeCreate,
      props: true
    },
    {
      path: '/CompanyView',
      name: 'companyView',
      component: CompanyView,
      props: true
    },
    {
      path: '/CompanyCreate',
      name: 'companyCreate',
      component: CompanyCreate
    },
    {
      path: '/CompanyEdit',
      name: 'companyEdit',
      component: CompanyEdit,
      props: true
    },
    {
      path: '/TripView',
      name: 'tripView',
      component: TripView,
      props: true
    },
    {
      path: '/TripCreate',
      name: 'tripCreate',
      component: TripCreate,
      props: true
    },
    {
      path: '/TripEdit',
      name: 'tripEdit',
      component: TripEdit,
      props: true
    },
    {
      path: '/ExpenceView',
      name: 'expenceView',
      component: ExpenceView,
      props: true
    },
    {
      path: '/ExpenceCreate',
      name: 'expenceCreate',
      component: ExpenceCreate,
      props: true
    },
    {
      path: '/ExpenceEdit',
      name: 'expenseEdit',
      component: ExpenceEdit,
      props: true
    }
  ]
})
