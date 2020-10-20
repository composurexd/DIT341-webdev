<template>
  <b-list-group>
    <div id="textColorTr">
      <h1> THIS IS THE TABLE OF TRIPS</h1>
      <button class= "headButSize confirmBut" @click="newTrip()">Create Trip</button> |
      <button class= "headButSize delBut" @click="deleteAllTrips()">Delete All</button> |
      <button class= "headButSize" id= "toEmployeeBut" @click="backToEmployeeView()">Back to Employees</button>
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
      for (var x = 0; x < this.trips.length; x++) {
        Api.delete('employees/' + this.employeeObject._id + '/trips/' + this.trips[x]._id)
          .then(response => {
          })
          .catch(error => {
            console.log(error)
          })
      }
      this.trips = []
    },
    deleteSingleTrip(trip) {
      Api.delete('employees/' + this.employeeObject._id + '/trips/' + trip._id)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
      // delete single trip from array (aka visual/view)
      for (var x = 0; x < this.trips.length; x++) {
        if (trip === this.trips[x]) {
          this.trips.splice(x, 1)
        }
      }
    },
    editSingleTrip(trip) {
      this.$router.push({ name: 'tripEdit', params: { employeeObj: this.employeeObject, tripObj: trip } })
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

<style scoped src="@/components/CSS_components.css">
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
