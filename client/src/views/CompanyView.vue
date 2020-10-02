<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF COMPANIES</h1>
        <button @click="newCompany()">New Company</button>
        <button @click="deleteAllCompanies()">Delete All</button>
        <li v-for='company in companies' :key='company._id'>
            <aCompany :company='company' />
        </li>
      </div>
  </b-list-group>
</template>

<script>
import aCompany from '@/components/companyComponent.vue'
import { Api } from '@/Api.js'

export default {
  name: 'CompanyView',
  components: {
    aCompany
  },

  data() {
    return {
      companies: []
    }
  },
  created() {
    this.getCompanies()
  },
  methods: {
    getCompanies() {
      this.companies = []
      Api.get('/company').then(response => {
        this.companies = []
        this.companies = response.data.companies
        console.log(this.companies)
      })
    },
    newCompany() {
      this.$router.push({ path: '/CompanyCreate' })
    },
    deleteAllCompanies() {
      Api.delete('/company').then(response => {
        console.log(response.data) // TODO: add proper error handling here and bellow
      }).catch(error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>

</style>
