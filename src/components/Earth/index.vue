<template>
  <div class="outside-container">
    <div class="Anchor">
      <div id="container">
      </div>
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
  right: 0;
  top: 75px;
}

.Anchor {
  width: 1226px;
  height: 500px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: 0 auto;
}
</style>