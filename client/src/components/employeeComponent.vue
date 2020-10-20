<template>
    <b-list-group-item>
        <b-row>
            <b-col  sm ="6" md ="6" lg="2">
                Name: <br> {{employee.fname}} {{employee.lname}}
            </b-col>

            <b-col  sm ="6" md ="6" lg="2">
                User Name: <br> {{employee.userName}}
            </b-col>
            <b-col>
                Password: <br> {{employee.userPass}}
            </b-col>
            <b-col sm ="6" md ="6" lg="2">
                Number of Trips: <br> {{employee.trips.length}}
            </b-col>
            <b-col sm ="12" md ="12" lg="4">
              <button class="componentEditDeleteBut" @click="editEmployee(employee)">Edit</button>
              <button class="componentInfoBut" id="toTripsBut" @click="showTrips(employee)">View Trips</button>
              <button class="componentEditDeleteBut delBut" @click="deleteEmployee(employee)">Delete</button>
            </b-col>
        </b-row>
    </b-list-group-item>
</template>

<script>
export default {
  name: 'aEmployee',
  props: ['employee'],

  data() {
    return {
    }
  },

  methods: {
    deleteEmployee(employee) {
      this.$emit('delete-employee', employee)
    },
    editEmployee(employee) {
      this.$router.push({ name: 'employeeEdit', params: { employeeObject: employee } }) // needs to pass company - or go over parent
    },
    showTrips(employee) {
      this.$router.push({ name: 'tripView', params: { employeeObject: employee } })
    }
  }
}
</script>
