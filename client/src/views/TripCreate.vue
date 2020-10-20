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
    // TODO: THIS DOES NOT WORK: 1. trips are not always saved---who knows why?! trips are added to the employee though, but they are not saved as trips
    //                           2. trips are not deleted when employee is deleted...
    //                           3. trips that have nothing inside them are not created, although they should be, maybe DATE?!
    saveTrip() {
      this.birdy.destination = document.getElementById('destination').value // TODO: empty employees should not be createable??
      this.birdy.description = document.getElementById('description').value
      // this.birdy.date = document.getElementById('date').value //TODO: make this a calander?
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
      console.log(this.employeeObj)
      console.log('HOLLY MOLLY')
      console.log(this.employeeObj.companys)
      Api.get('/companies/' + this.employeeObj.companys[0]).then(response => {
        this.companyObj = []
        this.companyObj = response.data
      })
    },
    test() {
      console.log(this.employeeObj)
    }
  }
}
</script>
<style scoped>
h1 { /*element selector*/
  color:darkblue;
  }
</style>
