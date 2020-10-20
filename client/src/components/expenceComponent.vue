<template>
    <b-list-group-item>
        <b-row>
            <b-col sm ="6" md="3">
                Location: <br> {{expense.location}}
            </b-col>
            <b-col sm ="6" md="3">
                Price: <br> {{expense.price}}
            </b-col>
            <b-col sm ="6" md="3">
                Description: <br> {{expense.description}}
            </b-col>
            <b-col>
            <button class="componentEditDeleteBut" @click="editExpense(expense)">Edit</button>
            <button class="componentEditDeleteBut delBut" @click="deleteExpense(expense)">Delete</button>
            </b-col>
        </b-row>
    </b-list-group-item>
</template>

<script>
export default {
  name: 'aExpence',
  props: ['expense'],

  data() {
    return {
    }
  },

  methods: {
    deleteExpense(expense) {
      this.$emit('delete-expense', expense)
    },
    editExpense(expense) {
      this.$emit('edit-expense', expense)
    }
  }
}
</script>

<style scoped src="@/components/CSS_components.css">
</style>
