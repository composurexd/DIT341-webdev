<template>
  <div>
    <link href="https://fonts.googleapis.com/css2?family=Lobster+Two:ital@1&display=swap" rel="stylesheet">
    <b-jumbotron class="margin" header="Track Your Expenses Here!" lead="Welcome to our Expenses Tracking System !">
      <a href="https://images.app.goo.gl/drMdC35ZtxrG16tLA">
      <img src="@/assets/receipts.png" alt="bunch of receipts"/></a>
      <my-footer/>
      </b-jumbotron>
  </div>
</template>

<script>
// @ is an alias to /src
import { Api } from '@/Api'
import myFooter from '@/components/footer.vue'
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
