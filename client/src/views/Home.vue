<template>
  <div>
    <b-jumbotron header="Expences Tracking System" lead="Welcome to your DIT341 Frontend Vue.js App">
      <b-button class="btn_message" variant="primary" v-on:click="getMessage()" >Get Message from Server</b-button>
      <p>Message from the server:<br/>
      {{ message }}</p>
      </b-jumbotron>
      <my-footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import myFooter from '@/components/try.vue'
export default {
  name: 'home',
  components: {
    myFooter
  },
  data() {
    return {
      message: 'none'
    }
  },
  methods: {
    getMessage() {
      Api.get('/employee')
        .then(response => {
          this.whateverIwant = response.data.fname
        })
<<<<<<< HEAD
=======
        .catch(error => {
          this.message = error
        })
>>>>>>> 0cd0e025e0c7e2667471c65aaa77502a73c209f1
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
</style>
