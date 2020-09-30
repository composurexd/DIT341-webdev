<template>
  <div>
    <h1> THIS IS THE TABLE OF EMPLOYEES</h1>
    <b-table striped hover :items="items" :fields="fields" @click= "clickEmployee()"></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Note 'isActive' is left out and will not appear in the rendered table
      fields: [
        {
          key: 'ID',
          label: 'Employee ID',
          sortable: true
        },
        {
          key: 'first_name',
          sortable: true
        },
        {
          key: 'last_name',
          sortable: true
        },
        {
          key: 'birthDate',
          sortable: true
        }
      ],
      items: [
        { ID: 'DSADSA54896DS4A89A', first_name: 'Dickerson', last_name: 'Macdonald', birthDate: new Date() },
        { ID: '478DSA498A48DSA78D', first_name: 'Larsen', last_name: 'Shaw', birthDate: new Date() },
        { ID: '48D7SA489DS484A948', first_name: 'Geneva', last_name: 'Wilson', birthDate: new Date() },
        { ID: '9489SD7A9D7ADA79DS', first_name: 'Jami', last_name: 'Carney', birthDate: new Date() }
      ],
      hover: true
      // stacked <- to allow for small screens
    }
  },
  methods: {
    clickEmployee() {
    }
  }
}
</script>
