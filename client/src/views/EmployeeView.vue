<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
        <button @click="newEmployee()">New Employee</button>
        <button @click="deleteAllEmpoyees()">Delete All</button>
        <button @click="backToCompanyView()">Back to Companies</button>
        <button @click="test()">TEST</button>
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
    deleteSingleEmployee(employee) { // TODO: write delete - 1. find employee in employees, 2. delete it from the array, and from the employee DBase, 3. hope to god it refreshes itself!
      console.log(employee)
      console.log('DELETING SOMETHING SECOND HAND')
      Api.delete('companies/' + employee.companys + '/employees/' + employee._id)
        .then(response => {
          console.log(response.data) // THIS DOES NOT UPDATE THE VIEW - REFRESH TO SEE CHANGES
        })
        .catch(error => {
          console.log(error)
        })
      for (var x = 0; x < this.employees.length; x++) {
        if (employee === this.employees[x]) {
          this.employees.split(x, x)
        }
      }
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
