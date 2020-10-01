<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
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
    getEmployees() {
      this.employees = []
      Api.get('/employee').then(response => {
        this.employees = []
        this.employees = response.data.employees
        console.log(this.employees)
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
