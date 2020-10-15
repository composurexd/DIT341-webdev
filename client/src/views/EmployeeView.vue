<template>
  <b-list-group>
    <div>
      <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
      <button @click="newEmployee()">New Employee</button>
      <button @click="deleteAllEmpoyees()">Delete All</button>
      <button @click="backToCompanyView()">Back to Companies</button>
      <button @click="test()">TEST</button>
      <li v-for='employee in employees'
        :key='employee._id'>
          <aEmployee :employee='employee' @delete-employee="deleteSingleEmployee" />
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
      employees: []
    }
  },
  created() {
    this.getEmployees()
  },
  methods: {
    // get employees from a cirten company
    getEmployees() {
      this.employees = []
      console.log(this.companyObject)
      Api.get('/employees/companies/' + this.companyObject._id).then(response => {
        this.employees = []
        this.employees = response.data.employees
        console.log(this.employees)
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
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.companyObject.employees = [] // TODO: this is a temporary solution - this needs to happen in backend hopefully!
      this.employees = []
    },
    // delete employee - this is triggered by component and emited to this method to allow responsive updateing
    deleteSingleEmployee(employee) {
      Api.delete('companies/' + this.companyObject._id + '/employees/' + employee._id)
        .then(response => {
          console.log(response.data)
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
    },
    test() {
      console.log(this.companyObject)
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
