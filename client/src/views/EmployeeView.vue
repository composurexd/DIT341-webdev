<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
        <button @click="newEmployee()">New Employee</button>
        <button @click="deleteAllEmpoyees()">Delete All</button>
        <button @click="testMethod(companyObject)">test</button>
        <li v-for='employee in employees' :key='employee._id'>
            <aEmployee :employee='employee' />
        </li>
      </div>
  </b-list-group>
</template>

<script>
import aEmployee from '@/components/employeeComponent.vue'
import { Api } from '@/Api.js'

export default {
  name: 'EmployeeView',
  props: ['companyObject'],
  components: {
    aEmployee
  },

  data() {
    return {
      employees: [],
      filteredEmployees: []
    }
  },
  created() {
    this.getEmployees()
  },
  methods: {
    getEmployees() {
      this.employees = []
      console.log(this.companyObject.name)
      // Api.get('/companies/' + this.companyObject._id + '/employees').then(response => {
      Api.get('/employees/c/' + this.companyObject._id).then(response => {
        this.employees = []
        this.employees = response.data.employees
        console.log(this.employees)
      })
    },
    testMethod(cO) {
      // console.log(cO)
      Api.get('/employees/c/' + cO._id).then(response => {
        this.employees = []
        this.employees = response.data.employees
        console.log(this.employees)
      })
      // this.filteredEmployees = []
      // this.employees.forEach(employee => {
      //  if (employee.companys[0] === this.companyObject._id) { this.filteredEmployees.push(employee) }
      // })
      // this.filteredEmployees = this.employees.filter(employee => employee.companys[0] === this.companyObject._id)
      // console.log(this.filteredEmployees)
    },
    newEmployee() {
      this.$router.push({ path: '/EmployeeCreate' })
    },
    deleteAllEmpoyees() {
      Api.delete('/employees').then(response => {
        console.log(response.data) // TODO: add proper error handling here and bellow
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
h1 {
  color:coral
  }
@media (max-width: 600px) {
  .detail {
    color: red;
    font-size: 16pt;
    font-weight: bold;
    /* display: none; */
  }
}

@media (min-width: 600px) {
  .more-info {
    display: none;
  }
}

</style>
