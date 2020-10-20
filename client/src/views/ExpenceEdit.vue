<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE EXPENSE EDIT PAGE</h1>
        <label for="location">Location: </label>
        <input type="text" id="location" :value= expense.location><br><br>
        <label for="price">Price: </label>
        <input type="text" id="price" :value= expense.price><br><br>
        <label for="description">Description: </label>
        <input type="text" id="description" :value= expense.description><br><br>
        <label for="date">Date: </label>
        <input type="text" id="date" :value= expense.date><br><br>
        <button class="backBut" @click="cancel()">Cancel</button>
        <button class="confirmBut" @click="saveExpence()">Save Expense</button>
      </div>
      <myFooter2/>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
import myFooter2 from '@/components/editFooter.vue'

export default {
  name: 'expenseEdit',
  props: ['tripObj', 'expense'],
  components: {
    myFooter2
  },

  data() {
    return {
      birdy: {
        location: '',
        description: '',
        date: '',
        price: '',
        trips: ''
      },
      companyObj: []
    }
  },
  created() {
    // this.getCompany()
  },
  methods: {
    saveExpence() {
      this.birdy.location = document.getElementById('location').value // TODO: empty employees should not be createable??
      this.birdy.description = document.getElementById('description').value
      this.birdy.date = document.getElementById('date').value // TODO: make this a calander?
      this.birdy.trips = this.tripObj
      this.birdy.price = document.getElementById('price').value
      console.log(this.tripObj)
      Api.patch('/expenses/' + this.expense._id, this.birdy)
        .then(response => {
          this.$router.push({ name: 'expenceView', params: { tripObject: this.tripObj } }) // pass company back to view
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'expenceView', params: { tripObject: this.tripObj } })
    }
    /*
    getCompany() {
      console.log(this.employeeObj)
      console.log('HOLLY MOLLY')
      console.log(this.employeeObj.companys)
      Api.get('/companies/' + this.employeeObj.companys[0]).then(response => {
        this.companyObj = []
        this.companyObj = response.data
      })
    },
    */
  }
}
</script>
<style scoped>
h1 { /*element selector*/
  color:darkviolet;
  }
</style>
