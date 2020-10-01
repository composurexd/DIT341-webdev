<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/potato">Potato</router-link>
      |
      <router-link to="employeeEdit">EmployeeEdit</router-link>
      |
      <router-link to="TripSearching">tripSearching</router-link>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
</style>
