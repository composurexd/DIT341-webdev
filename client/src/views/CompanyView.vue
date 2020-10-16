<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF COMPANIES</h1>
        <button class = "headButSize" @click="newCompany()">New Company</button>
        |
        <button class="delBut headButSize" @click="deleteAllCompanies()">Delete All</button>
        <li v-for='company in companies' :key='company._id'>
            <aCompany :company='company' @delete-company="deleteSingleCompany" />
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
    // get individual company
    getCompanies() {
      this.companies = []
      Api.get('/companies').then(response => {
        this.companies = []
        this.companies = response.data.companies
        console.log(this.companies)
      })
    },
    // create new employee
    newCompany() {
      this.$router.push({ path: '/CompanyCreate' })
    },
    // delete single company and their employees
    deleteSingleCompany(company) {
      Api.delete('companies/' + company._id)
        .then(response => {
          console.log(response.data)
        })
        .catch(error => {
          console.log(error)
        })
      // delete single employee from array (aka visual/view)
      for (var x = 0; x < this.companies.length; x++) {
        if (company === this.companies[x]) {
          this.companies.splice(x, 1)
        }
      }
    },
    // delete all companies (and their employees)
    deleteAllCompanies() {
      Api.delete('/companies').then(response => {
        console.log(response.data)
      }).catch(error => {
        console.log(error)
      })
      this.companies = [] // delete companies from view/data array
    }
  }
}
</script>

<style>
button {
  background: dimgrey;
  color: whitesmoke;
}
button:hover {
  background: white;
  color: dimgrey;
}
button.delBut:hover {
  background: red;
  color: black;
  font:bolder;
}
button.headButSize {
  width: 160px;
  height: 2000;
}
h1 {
  color:darkgreen;
  font-weight:10000
}
</style>
