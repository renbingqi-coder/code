<template>
  <div class="container">
    <div 
        class="wrapper"
        :style="`height:${}`"
    >
      <div class="content">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props:{
    props
  },
  data:()=>{
    
  }
}
</script>
<style scoped>
.container{
  overflow: auto;
}
.wrapper{
  position: relative;
}
</style>
  
