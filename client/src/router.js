import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Potato from './views/Potato.vue'
import EmployeeEdit from './views/EmployeeEdit.vue'
import EmployeeCreate from './views/EmployeeCreate.vue'

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
      path: '/potato',
      name: 'potato',
      component: Potato
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
    }
  ]
})
