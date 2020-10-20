<style scoped>
.color-text {
    color: darkcyan;
}
.thin-green-border {
  border-color: darkcyan;
  border-width: 2px;
  border-style:dashed;
  margin: 40px 10% 100px 10%;
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
    <h1 class="color-text">Tips for Edit :D</h1>
     <ol>
      <li>Type your new information in each form.</li>
      <li>Double check whether it is correct.</li>
      <li>Click save button</li>
     </ol>
   </div>
</template>

<script>
export default {
  name: 'myFooter2'
}
</script>
