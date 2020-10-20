<template>
    <b-list-group-item>
        <b-row>
            <b-col>
                Location: <br> {{expense.location}}
            </b-col>
            <b-col>
                Price: <br> {{expense.price}}
            </b-col>
            <b-col>
                Description: <br> {{expense.description}}
            </b-col>
            <button class="componentEditDeleteBut" @click="editExpense(expense)">Edit</button>
            <button class="componentEditDeleteBut delBut" @click="deleteExpense(expense)">Delete</button>
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

<style scoped>
</style>
