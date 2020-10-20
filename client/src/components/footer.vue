<style scoped>
.color-text {
    color: darkblue;
}
.thin-green-border {
  border-color: darkblue;
  border-width: 5px;
  border-style:dashed;
  margin: 20px 150px 100px 150px;
}
.divBackgroundColor {
  background-color:wheat;
}
div {
  font-family: monospace;
  font-size: 20px;
}
</style>
<template>
   <div class="color-text thin-green-border divBackgroundColor">
    <h1 class="color-text">Tips! :)</h1>
     <ol>
      <li>Register yourself within Company/Employee</li>
      <li>Serach your "Trips"</li>
      <li>View your "Expences"</li>
     </ol>
   </div>
</template>

<script>
export default {
  name: 'myFooter'
}
</script>
