<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Lobster+Two:ital@1&display=swap" rel="stylesheet">
    <div class="backgroundColor" id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/companyView">Company View</router-link>
      |
      <router-link to="/tripView">Trip View</router-link>
      |
      <router-link to="/expenceView">Expence View</router-link>
      |
      <img src="@/assets/threefarmers.jpg" alt="might be us"/>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Architects Daughter', cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:darkgoldenrod;
}
.backgroundColor {/* class selector*/
  background-color:wheat;
}
#nav {/* id selector */
  font-family: 'Lobster Two', cursive;
  font-size: 25px;
  text-align: center;
}
</style>
