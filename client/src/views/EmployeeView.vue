<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
        <button @click="newEmployee()">New Employee</button>
        <button @click="deleteAllEmpoyees()">Delete All</button>
        <button @click="backToCompanyView()">Back to Companies</button>
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
      Api.get('/employees/companies/' + this.companyObject._id).then(response => {
        this.employees = []
        this.employees = response.data.employees
        console.log(this.employees)
      })
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
    },
    backToCompanyView() {
      this.$router.push({ path: '/CompanyView' })
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
