<template>
  <b-list-group>
    <div>
      <h1> THIS IS THE TABLE OF TRIPS</h1>
      <button class= "headButSize confirmBut" @click="newTrip()">Create Trip</button> |
      <button class= "headButSize delBut" @click="deleteAllTrips()">Delete All</button> |
      <button class= "headButSize backBut" @click="backToEmployeeView()">Back to Employees</button>
      <li v-for='trip in trips'
        :key='trip._id'>
          <aTrip :trip='trip' @delete-trip="deleteSingleTrip" @edit-trip="editSingleTrip" />
      </li>
    </div>
    <myFooter/>
  </b-list-group>
</template>

<script>
import aTrip from '@/components/tripComponent.vue'
import { Api } from '@/Api.js'
import myFooter from '@/components/tipsFooter.vue'

export default {
  name: 'TripView',
  props: ['employeeObject'],
  components: {
    aTrip,
    myFooter
  },
  data() {
    return {
      trips: [],
      companyObj: []
    }
  },
  created() {
    this.getTrips()
    this.getCompany()
  },
  methods: {
    getTrips() {
      this.trips = []
      Api.get('/trips/employees/' + this.employeeObject._id).then(response => {
        this.trips = []
        this.trips = response.data.trips
      })
    },
    newTrip() {
      this.$router.push({ name: 'tripCreate', params: { employeeObj: this.employeeObject } })
    },
    deleteAllTrips() {
      console.log('DELETE ALL TRIPS')
    },
    deleteSingleTrip(trip) {
      console.log('deleteSingleTrip')
    },
    editSingleTrip(trip) {
      console.log('editSingleTrip')
    },
    backToEmployeeView() {
      this.$router.push({ name: 'employeeView', params: { companyObject: this.companyObj } })
    },
    getCompany() {
      Api.get('/companies/' + this.employeeObject.companys).then(response => {
        this.companyObj = []
        this.companyObj = response.data
      })
    }
  }
}
</script>

<style scoped>
h1 { /*element selector*/
  color:darkblue;
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
