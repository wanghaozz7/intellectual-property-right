<template>
  <div class="outside-container">
    <div id="container">
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {

  }
};
</script>

<style scoped>
.outside-container {
  flex-direction: row-reverse;
  position: relative;
  width: 100%;
  height: 650px;
  background: url("./ThreeJS/threejs/resources/images/bj5.png");
  background-position: center 0;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  /* 兼容Webkit内核浏览器如Chrome和Safari */
  -o-background-size: cover;
  /* 兼容Opera */
  zoom: 1;
}

#container {
  position: absolute;
  width: 600px;
  height: 600px;
  top: 50px;
  right: 400px;
}
</style>