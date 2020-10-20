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
    deleteTrip(trip) {
      this.$emit('delete-trip', trip)
    },
    editTrip(trip) {
      this.$emit('edit-trip', trip)
    },
    showExpences(trip) {
      this.$router.push({ name: 'expenceView', params: { tripObject: trip } })
    }
  }
}
</script>

<style scoped>
</style>
