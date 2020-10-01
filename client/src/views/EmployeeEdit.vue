<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE EMPLOYEE EDIT PAGE</h1>
        <p>{{employeeObject}}</p>
        <label for="fname">First Name:</label>
        <input type="text" id="fname" name="fname" :value= employeeObject.fname><br><br>
        <label for="lname">Last Name:</label>
        <input type="text" id="lname" name="lname" :value= employeeObject.lname><br><br>
        <label for="userName">User Name:</label>
        <input type="text" id="userName" name="userName" :value= employeeObject.userName><br><br>
        <label for="userPass">Password:</label>
        <input type="text" id="userPass" name="userPass" :value= employeeObject.userPass><br><br>
        <button @click="saveEmployee()">saveEmployee</button>
      </div>
  </b-list-group>
</template>

<script>
// import { Api } from '@/Api'        <input type="submit" value="Submit"> <button @click="saveEmployee(employeeObject._id, fname.value, lname.value, userName.value, userPass.value)">saveEmployee</button>

export default {
  name: 'employeeEdit',
  props: ['employeeObject'],

  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    saveEmployee() {
      console.log(document.getElementById('fname').value)
    }
  }
}

</script>
