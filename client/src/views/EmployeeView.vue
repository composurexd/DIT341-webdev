<template>
  <b-list-group>
    <div>
      <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
      <button class= "headButSize confirmBut" @click="newEmployee()">Create Employee</button> |
      <button class= "headButSize delBut" @click="deleteAllEmpoyees()">Delete All</button> |
      <button class= "headButSize backBut" id='toCompanyBut' @click="backToCompanyView()">Back to Companies</button>
      <li v-for='employee in employees'
        :key='employee._id'>
          <aEmployee :employee='employee' @delete-employee="deleteSingleEmployee" />
      </li>
    </div>
    <myFooter/>
  </b-list-group>
</template>

<script>
import aEmployee from '@/components/employeeComponent.vue'
import { Api } from '@/Api.js'
import myFooter from '@/components/tipsFooter.vue'

export default {
  name: 'EmployeeView',
  props: ['companyObject'],
  components: {
    aEmployee,
    myFooter
  },

  data() {
    return {
      employees: []
    }
  },
  created() {
    this.getEmployees()
  },
  methods: {
    getEmployees() {
      this.employees = []
      // get employees from a cirten company - this is M2.3b - get syntax is different as the employee returns the list of employees in a company, instead of the company returning the list of employees
      Api.get('/employees/companies/' + this.companyObject._id).then(response => {
        this.employees = []
        this.employees = response.data.employees
      })
    },
    newEmployee() {
      this.$router.push({ name: 'employeeCreate', params: { companyObj: this.companyObject } })
    },
    // delete all employees from company (and from company object passed)
    deleteAllEmpoyees() {
      for (var x = 0; x < this.employees.length; x++) {
        Api.delete('companies/' + this.companyObject._id + '/employees/' + this.employees[x]._id)
          .then(response => {
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.employees = []
    },
    // delete employee - this is triggered by component and emited to this method to allow responsive updateing
    deleteSingleEmployee(employee) {
      Api.delete('companies/' + this.companyObject._id + '/employees/' + employee._id)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
      // delete single employee from array (aka visual/view)
      for (var x = 0; x < this.employees.length; x++) {
        if (employee === this.employees[x]) {
          this.employees.splice(x, 1)
        }
      }
    },
    backToCompanyView() {
      this.$router.push({ path: '/CompanyView' })
    }
  }
}
</script>

<style scoped>
h1 { /*element selector*/
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
