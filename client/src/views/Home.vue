<template>
  <div>
    <b-jumbotron class="margin " header="Track Your Expenses Here!" lead="Welcome to our Expenses Tracking System !">
      <a href="https://images.app.goo.gl/drMdC35ZtxrG16tLA">
      <img src="@/assets/receipts.png" alt="bunch of receipts"/></a>
      </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'

export default {
  name: 'home',

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
        .catch(error => {
          this.message = error
        })
    }
  }
}
</script>

<style>
.btn_message {
  margin-bottom: 1em;
}
.margin {
  margin: 0px 20px 5px 20px;
}
</style>
