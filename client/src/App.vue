<template>
  <div id="app">
    <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Condensed&display=swap" rel="stylesheet">
    <div class="backgroundColor" id="nav">
      <router-link class="topbarcolor" to="/">Welcome Page</router-link>
      |
      <router-link class="topbarcolor" to="/companyView">Home</router-link>
      |
      <img src="@/assets/threefarmers.jpg" alt="might be us"/>
    </div>
    <!-- Render the content of the current page view -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Ubuntu Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:rgb(66, 65, 61);
}
.backgroundColor {/* class selector*/
  background-color:steelblue;
}
.topbarcolor {
  color:seashell;
}
#nav {/* id selector */
  font-family: 'Ubuntu Condensed', sans-serif;
  font-size: 25px;
  text-align: center;
  color:whitesmoke;
}
</style>
