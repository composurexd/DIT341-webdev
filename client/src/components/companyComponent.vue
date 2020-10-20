<template>
  <b-list-group-item class="componentListItem">
    <b-row>
      <b-col>
        Name: <br> {{company.name}}
      </b-col>
      <b-col>
        Location: <br> {{company.location}}
      </b-col>
      <b-col>
        User Name: <br> {{company.userName}}
      </b-col>
      <b-col>
        Password: <br> {{company.userPass}}
      </b-col>
      <b-col>
        Number of Employees: <br> {{company.employees.length}}
      </b-col>
        <button class= "componentEditDeleteBut" @click="editCompany(company)">Edit</button>
        <button class= "componentInfoBut" id="toEmployeeBut" @click="showEmployees(company)">View Employees</button><!--send emit back to; delete method from companyView-->
        <button class="componentEditDeleteBut delBut" @click="deleteCompany(company)">Delete</button>
    </b-row>
  </b-list-group-item>
</template>

<script>
export default {
  name: 'aCompany',
  props: ['company'],

  data() {
    return {
    }
  },

  methods: {
    deleteCompany(company) {
      console.log('TRYING TO PASS COMPANY: ')
      this.$emit('delete-company', company)
    },
    editCompany(company) {
      this.$router.push({ name: 'companyEdit', params: { companyObject: company } })
    },
    // shows employees in company
    showEmployees(company) {
      this.$router.push({ name: 'employeeView', params: { companyObject: company } })
    }
  }
}
</script>
