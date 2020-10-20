<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE COMPANY Edit PAGE</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" :value= companyObject.name><br><br>
        <label for="location">Location:</label>
        <input type="text" id="location" name="location" :value= companyObject.location><br><br>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName" :value= companyObject.userName><br><br>
        <label for="userPass">Password:</label>
        <input type="text" id="userPass" name="userPass" :value= companyObject.userPass><br><br>
        <button class="backBut" @click="cancel()">Cancel</button> |
        <button class="confirmBut" @click="saveCompany()">saveCompany</button>
      </div>
      <myFooter2/>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
import myFooter2 from '@/components/editFooter.vue'

export default {
  name: 'companyEdit',
  props: ['companyObject'],
  components: {
    myFooter2
  },

  data() {
    return {
      birdy: {
        name: '',
        location: '',
        userName: '',
        userPass: ''
      }
    }
  },
  created() {
  },
  methods: {
    saveCompany() {
      this.birdy.name = document.getElementById('name').value
      this.birdy.location = document.getElementById('location').value
      this.birdy.userName = document.getElementById('userName').value
      this.birdy.userPass = document.getElementById('userPass').value
      Api.put('/companies/' + this.companyObject._id, this.birdy)
        .then(response => {
          console.log(response.data) // TODO: add proper error handling here and bellow
          this.$router.push({ path: '/CompanyView' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ path: '/CompanyView' })
    }
  }
}
</script>
