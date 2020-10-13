<template>
    <b-list-group-item>
        <b-container>
            <b-row>
                <b-col>
                    Name: {{employee.fname}} {{employee.lname}}
                </b-col>

                <b-col>
                    User Name: {{employee.userName}}
                </b-col>
                <b-col>
                    Password: {{employee.userPass}}
                </b-col>
                <b-col>
                    Trips: {{employee.trips}}
                </b-col>
                <button @click="editEmployee(employee)">Edit</button>
                <button @click="deleteEmployee(employee)">Delete</button>
            </b-row>
        </b-container>
    </b-list-group-item>
</template>

<script>
// import { Api } from '@/Api'

export default {
  name: 'aEmployee',
  props: ['employee'],

  data() {
    return {
    }
  },

  methods: {
    // deleteEmployee(employee) {
    // Api.delete('companies/' + employee.companys + '/ employees /' + employee._id)
    // .then(response => {
    // console.log(response.data) // THIS DOES NOT UPDATE THE VIEW - REFRESH TO SEE CHANGES
    // })
    // .catch(error => {
    // console.log(error)
    // })
    // },this.$refs.modal.showModal();
    deleteEmployee(employee) {
      // this.$root.$emit('deleteSingleEmployee', employee)
      console.log('TRYING TO PASS')
    },
    editEmployee(employee) {
      this.$router.push({ name: 'employeeEdit', params: { employeeObject: employee } }) // needs to pass company - or go over parent
    }
  }
}
</script>

<style scoped>
</style>
