<template>
  <b-list-group>
      <div>
        <h1> THIS IS THE TABLE OF COMPANIES</h1>
        <button class = "confirmBut headButSize" @click="newCompany()">New Company</button>
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
button { /*element selector*/
  background: dimgrey;
  color: whitesmoke;
}
h1 { /*element selector*/
  color:darkgreen;
}
.headButSize { /*class selector*/
  width: 160px;
  height: 2000;
}
button:hover { /*class selector*/
  background: white;
  color: black;
}
.delBut:hover { /*class selector*/
  background: darkred;
  color: white;
}
.confirmBut:hover{ /*class selector*/
  background: darkgreen;
  color: white;
}
.backBut:hover{ /*class selector*/
  background: yellow;
  color: black;
}
/*#id calls for compnent view-change buttons (view Employees)*/
#toEmployeeBut:hover { /*id selector*/
  background: coral;
  color: black;
}
#toTripsBut:hover { /*id selector*/
  background: darkblue;
  color: white;
}
#toExpensesBut:hover {
  background:darkviolet;
  color: white;
}
.componentInfoBut { /*class selector*/ /*component view next page (company -> employee) */
  width: 140px;
  height: 50px;
}
.componentEditDeleteBut { /*class selector*/ /*component edit/delete buttons */
  width: 64px;
  height: 50px
}
.componentListItem { /*class selector*/ /*component list item row*/
  min-height:100px
}
</style>
