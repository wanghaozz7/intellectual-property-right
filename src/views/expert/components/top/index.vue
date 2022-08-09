<template>
  <div class="contain">
    <div class="content">
      <router-link to="/moreExpert">
        <div class="title">
          <span>知识产权对接平台</span>
        </div>
      </router-link>
      <div class="search" v-if="sign" style="margin-left: 440px;">
        <el-input style="width: 480px;" v-model="input" placeholder="输入专家名称、技术信息，如“杨振宁 粒子物理学”"></el-input>
        <el-button style="background-color: #2489f2;color:#fff; margin-left:10px;" slot="append" icon="el-icon-search">
        </el-button>
      </div>
    </div>
  </div>
</template>

<script src="./index.js">
</script>

<style scoped>
.contain {
  height: 86px;
  background-color: #fff;
  border-bottom: 1px solid #e3e3e3;
  margin-bottom: 10px;
}

.content {
  display: flex;
  width: 1226px;
  height: 86px;
  align-items: center;
  margin: 5px auto;
}

.search {
  display: flex;
}

.title {
  margin-right: 80px;
}

.title span {
  font-size: 20px;
  font-weight: bold;
  color: #000;
}
</style>
