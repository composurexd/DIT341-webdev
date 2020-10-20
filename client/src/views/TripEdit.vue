<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TRIP EDIT PAGE</h1>
        <label for="destination">Destination: </label>
        <input type="text" id="destination" :value= tripObj.destination><br><br>
        <label for="budget">Budget: </label>
        <input type="text" id="budget" :value= tripObj.budget><br><br>
        <label for="description">Description: </label>
        <input type="text" id="description" :value= tripObj.description><br><br>
        <button class="backBut" @click="cancel()">Cancel</button>
        <button class="confirmBut" @click="saveTrip()">Save Trip</button>
      </div>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'tripEdit',
  props: ['employeeObj', 'tripObj'],

  data() {
    return {
      birdy: {
        destination: '',
        description: '',
        date: '',
        budget: '',
        employees: ''
      }
    }
  },
  created() {
  },
  methods: {
    saveTrip() {
      this.birdy.destination = document.getElementById('destination').value
      this.birdy.description = document.getElementById('description').value
      this.birdy.employees = this.employeeObj
      this.birdy.budget = document.getElementById('budget').value
      Api.patch('/trips/' + this.tripObj._id, this.birdy)
        .then(response => {
          this.$router.push({ name: 'tripView', params: { employeeObject: this.employeeObj } })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'tripView', params: { employeeObject: this.employeeObj } })
    }
  }
}
</script>
<style scoped>
h1 { /*element selector*/
  color:darkblue;
  }
</style>
