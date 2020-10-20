<template>
  <b-list-group-item class="componentListItem">
    <b-row>
      <b-col sm ="6" md ="4" lg="2">
        Name: <br> {{company.name}}
      </b-col>
      <b-col sm ="6" md ="4" lg="1">
        Location: <br> {{company.location}}
      </b-col>
      <b-col sm ="6" md ="4" lg="2">
        Number of Employees: <br> {{company.employees.length}}
      </b-col>
      <b-col sm ="6" md ="6" lg="2">
        User Name: <br> {{company.userName}}
      </b-col>
      <b-col sm ="6" md ="6" lg="1">
        Password: <br> {{company.userPass}}
      </b-col>

      <b-col sm ="12" md ="12" lg="4">
        <button class= "componentEditDeleteBut" @click="editCompany(company)">Edit</button>
        <button class= "componentInfoBut" id="toEmployeeBut" @click="showEmployees(company)">View Employees</button><!--send emit back to; delete method from companyView-->
        <button class="componentEditDeleteBut delBut" @click="deleteCompany(company)">Delete</button>
      </b-col>
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
<style scoped src="@/components/CSS_components.css">
</style>
