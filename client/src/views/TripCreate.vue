<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TRIP CREATE PAGE</h1>
        <label for="destination">Destination: </label>
        <input type="text" id="destination"><br><br>
        <label for="budget">Budget: </label>
        <input type="text" id="budget"><br><br>
        <label for="description">Description: </label>
        <input type="text" id="description"><br><br>
        <button class="backBut" @click="cancel()">Cancel</button>
        <button class="confirmBut" @click="saveTrip()">Save Trip</button>
      </div>
      <myFooter1/>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
import myFooter1 from '@/components/createFooter.vue'

export default {
  name: 'tripCreate',
  props: ['employeeObj'],
  components: {
    myFooter1
  },

  data() {
    return {
      birdy: {
        destination: '',
        description: '',
        date: '',
        budget: '',
        employees: ''
      },
      companyObj: []
    }
  },
  created() {
    this.getCompany()
  },
  methods: {
    saveTrip() {
      this.birdy.destination = document.getElementById('destination').value
      this.birdy.description = document.getElementById('description').value
      this.birdy.employees = this.employeeObj
      this.birdy.budget = document.getElementById('budget').value
      Api.post('/employees/' + this.employeeObj._id + '/trips', this.birdy)
        .then(response => {
          this.$router.push({ name: 'tripView', params: { employeeObject: this.employeeObj } })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'tripView', params: { employeeObject: this.employeeObj } })
    },
    getCompany() {
      Api.get('/companies/' + this.employeeObj.companys[0]).then(response => {
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
</style>
