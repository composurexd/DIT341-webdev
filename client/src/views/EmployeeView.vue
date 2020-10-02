<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
        <button @click="newEmployee()">New Employee</button>
        <button @click="deleteAllEmpoyees()">Delete All</button>
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
      employeeObjects: []
    }
  },
  created() {
    this.getEmployees()
  },
  methods: {
    getEmployees() {
      this.employees = []
      console.log(this.companyObject.name)
      Api.get('/companies/' + this.companyObject._id + '/employees').then(response => {
        this.employees = []
        this.employees = response.data
        console.log(this.employees)
      })
      for (var x = 0; x < this.employees.length; x++) {
        Api.get('/employees/:' + this.employees[x]).then(response => {
          this.employeeObjects[x] = response.data.employee
          console.log(response.data.employee)
        })
      }
      console.log('HELP ME')
      console.log(this.employeeObjects)
      console.log('HELP ME')
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
