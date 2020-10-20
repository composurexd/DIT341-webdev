<style scoped>
.color-text {
    color: darkblue;
}
.thin-green-border {
  border-color: darkblue;
  border-width: 2px;
  border-style:dashed;
  margin: 20px 150px 100px 150px;
}
.divBackgroundColor {
  background-color:wheat;
}
#fontstyle {
  font-family: 'Caveat', cursive;
  font-size: 25px;
}
</style>
<template>
   <div class="color-text thin-green-border divBackgroundColor" id="fontstyle">
     <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap" rel="stylesheet">
    <h1 class="color-text">Tips! :)</h1>
     <ol>
      <li>Register yourself within Company/Employee first.</li>
      <li>Serach your "Trips".</li>
      <li>View your "Expences."</li>
     </ol>
   </div>
</template>

<script>
export default {
  name: 'myFooter'
}
</script>
