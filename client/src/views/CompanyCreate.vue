<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE COMPANY CREATE PAGE</h1>
        <label for="name">Name:</label>
        <input type="text" id="name" name="name"><br><br>
        <label for="location">Location:</label>
        <input type="text" id="location" name="location"><br><br>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName"><br><br>
        <label for="userPass">Password:</label>
        <input type="text" id="userPass" name="userPass"><br><br>
        <button @click="cancel()">Cancel</button> |
        <button @click="saveCompany()">saveCompany</button>
      </div>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'companyCreate',
  props: ['companyObject'],
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
      this.birdy.name = document.getElementById('name').value // TODO: empty employees should not be createable??
      this.birdy.location = document.getElementById('location').value
      this.birdy.userName = document.getElementById('userName').value
      this.birdy.userPass = document.getElementById('userPass').value
      Api.post('/companies', this.birdy) // TODO: THIS NEEDS TO BECOME A PUT METHOD - SO EMPLOYEE IS DIRECTLY ADDED TO COMPANY
        .then(response => {
          console.log(response.data) // TODO: add proper error handling here and bellow
          this.$router.push({ path: '/companyView' })
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ path: '/companyView' })
    }
  }
}
</script>
