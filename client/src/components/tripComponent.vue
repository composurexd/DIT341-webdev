<template>
    <b-list-group-item>
        <b-row>
            <b-col>
                Destination: <br> {{trip.destination}}
            </b-col>
            <b-col>
                budget: <br> {{trip.budget}}
            </b-col>
            <b-col>
                Description: <br> {{trip.description}}
            </b-col>
            <b-col>
                Number of Expences: <br> {{trip.expenses.length}}
            </b-col>
            <button class="componentEditDeleteBut" @click="editTrip(trip)">Edit</button>
            <button class="componentInfoBut" id="toExpensesBut" @click="showExpences(trip)">View Expences</button>
            <button class="componentEditDeleteBut delBut" @click="deleteTrip(trip)">Delete</button>
        </b-row>
    </b-list-group-item>
</template>

<script>
export default {
  name: 'aTrip',
  props: ['trip'],

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
    deleteTrip(trip) {
      // this.$root.$emit('deleteSingleEmployee', employee)
      console.log('TRYING TO PASS:')
      this.$emit('delete-trip', trip)
    },
    editTrip(trip) {
      console.log('TRYING TO PASS:')
      this.$emit('edit-trip', trip)
      // this.$router.push({ name: 'tripEdit', params: { employeeObject: this.employeeObject, tripObject: this.trip } }) // needs to pass employee - or go over parent
    },
    showExpences(trip) {
      console.log('show expences')
      this.$router.push({ name: 'expenceView', params: { tripObject: trip } })
    }
  }
}
</script>

<style scoped>
</style>
