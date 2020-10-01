<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE EMPLOYEE CREATE PAGE</h1>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname"><br><br>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname"><br><br>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName"><br><br>
        <label for="userPass">Password:</label>
        <input type="text" id="userPass" name="userPass"><br><br>
        <button @click="saveEmployee()">saveEmployee</button>
      </div>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'

export default {
  name: 'employeeCreate',
  props: ['employeeObject'],
  data() {
    return {
      birdy: {
        fname: '',
        lname: '',
        userName: '',
        userPass: ''
      }
    }
  },
  created() {
  },
  methods: {
    saveEmployee() {
      this.birdy.fname = document.getElementById('fname').value
      this.birdy.lname = document.getElementById('lname').value
      this.birdy.userName = document.getElementById('userName').value
      this.birdy.userPass = document.getElementById('userPass').value
      Api.post('/employee', this.birdy) // TODO: THIS NEEDS TO BECOME A PUT METHOD - SO EMPLOYEE IS DIRECTLY ADDED TO COMPANY
        .then(response => {
          console.log(response.data) // TODO: add proper error handling here and bellow
        })
        .catch(error => {
          console.log(error)
        })
    }
  }
}
</script>
