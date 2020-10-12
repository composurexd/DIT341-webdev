import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import EmployeeView from './views/EmployeeView.vue'
import EmployeeEdit from './views/EmployeeEdit.vue'
import EmployeeCreate from './views/EmployeeCreate.vue'
import CompanyView from './views/CompanyView'
import CompanyCreate from './views/CompanyCreate.vue'
import CompanyEdit from './views/CompanyEdit.vue'
import TripSearching from './views/TripSearching.vue'

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
      component: EmployeeCreate
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
      path: '/tripSearching',
      name: 'tripSearching',
      component: TripSearching
    }
  ]
})
