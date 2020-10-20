<template>
  <b-list-group>
    <div>
      <h1> THIS IS THE TABLE OF EXPENCES</h1>
      <button class= "headButSize confirmBut" @click="newExpence()">Create Expence</button> |
      <button class= "headButSize delBut" @click="deleteAllExpenses()">Delete All</button> |
      <button class= "headButSize backBut" @click="backToTripView()">Back to Trips</button>
      <li v-for='expence in expences'
        :key='expence._id'>
          <aExpence :expense='expence' @delete-expense="deleteSingleExpense" @edit-expense="editSingleExpense" />
      </li>
    </div>
    <myFooter/>
  </b-list-group>
</template>

<script>
import aExpence from '@/components/expenceComponent.vue'
import { Api } from '@/Api.js'
import myFooter from '@/components/footer.vue'

export default {
  name: 'ExpenceView',
  props: ['tripObject'],
  components: {
    aExpence,
    myFooter
  },
  data() {
    return {
      expences: [],
      employeeObj: []
    }
  },
  created() {
    this.getExpences()
    this.getEmployee()
  },
  methods: {
    getExpences() {
      this.expences = []
      console.log(this.tripObject._id)
      Api.get('/expenses/trips/' + this.tripObject._id).then(response => {
        this.expences = []
        this.expences = response.data.expenses
        console.log('expenses are: ')
        console.log(this.expences)
      })
    },
    newExpence() {
      this.$router.push({ name: 'expenceCreate', params: { tripObj: this.tripObject } })
    },
    deleteAllExpenses() {
      console.log('DELETE ALL Expences')
      for (var x = 0; x < this.expences.length; x++) {
        Api.delete('trips/' + this.tripObject._id + '/expenses/' + this.expences[x]._id)
          .then(response => {
          })
          .catch(error => {
            console.log(error)
          })
        // delete single expense from array (aka visual/view)
      }
      this.expences = []
    },
    deleteSingleExpense(expense) {
      console.log('deleteSingleExpence')
      Api.delete('trips/' + this.tripObject._id + '/expenses/' + expense._id)
        .then(response => {
        })
        .catch(error => {
          console.log(error)
        })
      // delete single expense from array (aka visual/view)
      for (var x = 0; x < this.expences.length; x++) {
        if (expense === this.expences[x]) {
          this.expences.splice(x, 1)
        }
      }
    },
    editSingleExpense(expense) {
      this.$router.push({ name: 'expenseEdit', params: { expense: expense, tripObj: this.tripObject } })
    },
    backToTripView() {
      this.$router.push({ name: 'tripView', params: { employeeObject: this.employeeObj } })
    },
    getEmployee() {
      Api.get('/employees/' + this.tripObject.employees).then(response => {
        this.employeeObj = []
        this.employeeObj = response.data
      })
    }
  }
}
</script>

<style scoped>
h1 { /*element selector*/
  color:darkviolet;
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
