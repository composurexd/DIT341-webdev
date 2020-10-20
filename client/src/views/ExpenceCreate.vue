<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE EXPENSE CREATE PAGE</h1>
        <label for="location">Location: </label>
        <input type="text" id="location"><br><br>
        <label for="price">Price: </label>
        <input type="text" id="price"><br><br>
        <label for="description">Description: </label>
        <input type="text" id="description"><br><br>
        <button class="backBut" @click="cancel()">Cancel</button>
        <button class="confirmBut" @click="saveExpence()">Save Expense</button>
      </div>
      <myFooter1/>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
import myFooter1 from '@/components/createFooter.vue'

export default {
  name: 'expenceCreate',
  props: ['tripObj'],
  components: {
    myFooter1
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

  },
  methods: {
    saveExpence() {
      this.birdy.location = document.getElementById('location').value
      this.birdy.description = document.getElementById('description').value
      this.birdy.trips = this.tripObj
      this.birdy.price = document.getElementById('price').value
      Api.post('/trips/' + this.tripObj._id + '/expenses', this.birdy)
        .then(response => {
          this.$router.push({ name: 'expenceView', params: { tripObject: this.tripObj } })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'expenceView', params: { tripObject: this.tripObject } })
    }
  }
}
</script>
<style scoped>
h1 { /*element selector*/
  color:darkviolet;
  }
</style>
