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
        <button class="backBut" @click="cancel()">Cancel</button> |
        <button class="confirmBut" @click="saveCompany()">saveCompany</button>
      </div>
      <myFooter1/>
  </b-list-group>
</template>

<script>
import { Api } from '@/Api'
import myFooter1 from '@/components/createFooter.vue'

export default {
  name: 'companyCreate',
  props: ['companyObject'],
  components: {
    myFooter1
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
      Api.post('/companies', this.birdy)
        .then(response => {
          console.log(response.data)
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
<style scoped>
h1 { /*element selector*/
  color:darkgreen;
}
</style>
