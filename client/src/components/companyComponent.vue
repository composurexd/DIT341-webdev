<template>
    <b-list-group-item>
        <b-container>
            <b-row>
                <b-col>
                    Name: {{company.name}}
                </b-col>
                <b-col>
                    Location: {{company.location}}
                </b-col>
                <b-col>
                    User Name: {{company.userName}}
                </b-col>
                <b-col>
                    Password: {{company.userPass}}
                </b-col>
                <b-col>
                    Employees: {{company.employees}}
                </b-col>
                <b-col>
                    Trips: {{company.trips}}
                </b-col>
                <button @click="editCompany(company)">Edit</button>
                <button @click="showEmployees(company)">View Employees</button><!--send emit back to delete from companyview-->
                <button @click="deleteCompany(company)">Delete</button>
            </b-row>
        </b-container>
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
      // this.$root.$emit('deleteSingleEmployee', employee)
      console.log('TRYING TO PASS COMPANY: ')
      // console.log(employee)
      this.$emit('delete-company', company)
    },
    // deleteCompany(company) {
    //   for (var x = 0; x < company.employees.length; x++) {
    //     Api.delete('/employees/' + company.employees[x])
    //      .then(response => {
    //      console.log(response.data)
    //   })
    //  .catch(error => {
    //    console.log(error)
    //  })
    // }
    //  Api.delete('/companies/' + company._id)
    //    .then(response => {
    //      console.log(response.data) // THIS DOES NOT UPDATE THE VIEW - REFRESH TO SEE CHANGES
    //    })
    //    .catch(error => {
    //      console.log(error)
    //    })
    // },
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

<style scoped>
</style>
