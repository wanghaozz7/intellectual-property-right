<template>
  <div>
    <el-card class="box-card">
      <el-form :model="registerInfo" label-position="left" label-width="80px">
        <el-form-item label="手机号码">
          <el-input v-model="registerInfo.phone" placeholder="请输入您的手机号码"></el-input>
        </el-form-item>
        <el-form-item label="昵称">
          <el-input v-model="registerInfo.name" placeholder="您在本站使用的名称"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerInfo.key" show-password placeholder="请输入您的密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="registerInfo.confirmKey" show-password placeholder="请确认您的密码"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" style="width: 100%;">注册</el-button>
    </el-card>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {

  },
  data() {
    return {
      registerInfo: {
        phone: '',
        name: '',
        key: '',
        confirmKey: '',
      }
    }
  }
};
</script>

<style scoped>
.box-card {
  width: 450px;
  margin: 15vh auto;
}
</style>