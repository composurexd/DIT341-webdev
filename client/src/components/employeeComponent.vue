<template>
    <b-list-group-item>
        <b-container>
            <b-row>
                <b-col>
                    {{employee.fname}}
                </b-col>
                <b-col>
                    {{employee.lname}}
                </b-col>
                <b-col>
                    {{employee.birthday}}
                </b-col>
                <b-col>
                    {{employee.userName}}
                </b-col>
                <b-col>
                    {{employee.userPass}}
                </b-col>
                <b-col>
                    {{employee.trips}}
                </b-col>
                <b-col>
                    <button @click="editEmployee(employee)">Edit</button>
                </b-col>
                <b-col>
                    <button @click="deleteEmployee(employee._id)">Delete</button>
                </b-col>
            </b-row>
        </b-container>
    </b-list-group-item>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'aEmployee',
  props: ['employee'],

  data() {
    return {
    }
  },

  methods: {
    deleteEmployee(employeeID) {
      Api.delete('/employee/' + employeeID)
        .then(response => {
          console.log(response.data) // THIS DOES NOT UPDATE THE VIEW - REFRESH TO SEE CHANGES
        })
        .catch(error => {
          console.log(error)
        })
    },
    editEmployee(employee) {
      this.$router.push({ name: 'employeeEdit', params: { employeeObject: employee } })
    }
  }
}
</script>

<style scoped>
</style>
