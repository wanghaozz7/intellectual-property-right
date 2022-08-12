<template>
  <div>

    <!-- 顶部 -->
    <top sign="true"></top>
    <!-- 内容 -->
    <div style="width: 1226px;margin: 20px auto;height: auto;">
      <el-container style="width: 100%;height: 100%;">
        <!-- 侧边栏 -->
        <el-aside
          style="width: 150px;height: 100%;padding: 0;margin-right: 20px;min-height: 578px;background-color: white;">
          <el-menu style="width:100%;height: 100%;" @select="idx_change" text-color="#c9c9c9" :default-active="0">
            <el-menu-item v-for="(item, index) in field" :index=index style="text-align: center;">
              <span slot="title"
                style="font-size: 18px;font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">{{ item }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容 -->
        <el-main style="width: 1056px;height: 100%;padding: 0;">
          <el-card style="width: 100%;height: 100%;" body-style="padding:0">
            <!-- 头部 -->
            <div slot="header" class="clearfix">
              <span style="line-height: 40px;font-size: 18px;font-weight: 900;">{{ field[selected_idx] }}</span>
              <el-button style="float: right; padding: 3px 0;height: 40px;width: 70px;" type="primary" plain
                @click="dialogVisible = true">添加需求
              </el-button>
            </div>
            <!-- 列表 -->
            <transition name="el-fade-in-linear" v-for="item of demand[selected_idx]">
              <el-card style="width: 100%;height: 250px;" class="show_card" body-style="height:100%">
                <p style="font-size: 18px;margin-bottom: 20px;font-weight: 600;">{{ item.customer }}</p>
                <p style="font-size: 17px;font-weight: 1000;margin-bottom: 10px;">{{ item.title }}</p>
                <p style="max-height: 63px;overflow: hidden;margin-bottom: 10px;">
                  {{ item.details }}</p>
                <p style="margin-bottom: 10px;">{{ item.date }}</p>
                <p>{{ item.progress }}</p>
              </el-card>
            </transition>

          </el-card>
        </el-main>
      </el-container>
      <el-dialog :visible.sync="dialogVisible">
        <el-form ref="form" :model="form" label-width="150px" label-position=left>
          <el-form-item v-for="item in elForm" :key="item.fieldName" :label="item.label" label-position="left">
            <el-input v-if="item.type === 'input'" :placeholder="item.placeholder" v-model="form[item.fieldName]"
              style="width: 833px"></el-input>
            <el-input v-if="item.type === 'inputArea'" :placeholder="item.placeholder" v-model="form[item.fieldName]"
              type="textarea" style="width: 833px;min-height: 100px;"></el-input>
            <el-radio-group v-if="item.type === 'radio'" v-model="form[item.fieldName]">
              <el-radio-button v-for="radio in item.msg" :key="radio" :label="radio"></el-radio-button>
            </el-radio-group>
            <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple
              v-if="item.type === 'upload'">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form-item>
          <el-button type="primary" style="width: 100%;" @click="Submit">提交需求</el-button>
        </el-form>
      </el-dialog>
    </div>

  </div>
</template>

<script src="./index.js"></script>

<style scoped>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix {
  height: 40px;
}

.clearfix:after {
  clear: both
}

.show_card {
  padding: 0;
}

.show_card :hover {
  transition: all .8s;
  background-color: #01847f;
  color: #f9d3e3;
}

/* 修改menu默认悬浮和激活样式 */
.el-menu .el-menu-item:hover {
  outline: 0 !important;
  color: #2E95FB !important;
  background: white !important;
}

.el-menu .el-menu-item.is-active {
  color: #2E95FB !important;
  background: white !important;
}
</style>

