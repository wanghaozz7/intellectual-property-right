<template>
  <div>
    <el-card class="box-card">
      <el-form ref="form" :model="form" >
        <el-form-item v-for="item in elForm" :key="item.fieldName" :label="item.label" label-position="left">
          <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="form[item.fieldName]" style="width: 800px"></el-input>
          <el-input v-if="item.type === 'inputArea'" :placeholder="item.placeholder" v-model="form[item.fieldName]" type="textarea" style="width: 800px;height: 100px;"></el-input>
          <el-radio-group v-if="item.type === 'radio'" v-model="form[item.fieldName]">
            <el-radio-button v-for="radio in item.msg" :key="radio" :label="radio"></el-radio-button>
          </el-radio-group>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="width: 800px;" @click="Submit">提交需求</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
div{
  display: flex;
  flex-direction:row;
  /* 实现水平居中 */
  justify-content: center;
}
.box-card{
  width: 970px;
  height: 825px;
  /*实现垂直居中*/
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
}
</style>
