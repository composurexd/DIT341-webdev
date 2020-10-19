<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE EMPLOYEE EDIT PAGE</h1>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" :value= employeeObject.fname><br><br>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" :value= employeeObject.lname><br><br>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName" :value= employeeObject.userName><br><br>
        <label for="userPass">Password:</label>
        <input type="text" id="userPass" name="userPass" :value= employeeObject.userPass><br><br>
        <label for="company"> Company:</label>
        <input type="text" id="company" name="company" :value= this.companyObj.name disabled><br><br>
        <button class="backBut" @click="cancel()">Cancel</button> |
        <button class="confirmBut" @click="saveEmployee()">saveEmployee</button>
      </div>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
// <input type="submit" value="Submit"> <button @click="saveEmployee(employeeObject._id, fname.value, lname.value, userName.value, userPass.value)">saveEmployee</button>

export default {
  name: 'employeeEdit',
  props: ['employeeObject'],

  data() {
    return {
      birdy: {
        fname: '',
        lname: '',
        userName: '',
        userPass: '',
        companys: []
      },
      companies: [],
      companyObj: []
    }
  },
  created() {
    this.getCompany()
  },
  methods: {
    saveEmployee() {
      this.birdy.fname = document.getElementById('fname').value
      this.birdy.lname = document.getElementById('lname').value
      this.birdy.userName = document.getElementById('userName').value
      this.birdy.userPass = document.getElementById('userPass').value
      this.birdy.companys = this.companyObj._id
      // now patch - and pass back to employee view while knowing what company the page is lookig at
      Api.patch('/employees/' + this.employeeObject._id, this.birdy)
        .then(response => {
          this.$router.push({ name: 'employeeView', params: { companyObject: this.companyObj } }) // pass company back to view
        })
        .catch(error => {
          console.log(error)
        })
    },
    cancel() {
      this.$router.push({ name: 'employeeView', params: { companyObject: this.companyObj } }) // Pass company back to view
    },
    // get the company this employee belongs to
    getCompany() {
      Api.get('/companies/' + this.employeeObject.companys).then(response => {
        this.companyObj = []
        this.companyObj = response.data
      })
    }
  }
}
</script>
