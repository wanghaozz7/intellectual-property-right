<template>
  <div>
    <!-- 顶部 -->
    <top :sign="true" holder="输入需求关键词"></top>
    <!-- 内容 -->
    <div class="container">
      <!-- content -->
      <el-container>
        <!-- 侧边栏 -->
        <el-aside class="aside" style="width: 120px">
          <el-menu
            @select="idx_change"
            text-color="#c9c9c9"
            :default-active="selected_idx"
          >
            <el-menu-item
              v-for="(item, idx) in field"
              :index="idx"
              style="text-align: center"
            >
              <span slot="title" class="field-title">{{ item }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容 -->
        <el-main class="mainContent">
          <el-card body-style="padding:0">
            <!-- 头部 -->
            <div slot="header" class="clearfix">
              <span class="header-title">{{ field[selected_idx] }}</span>
              <el-button
                class="header-button"
                type="primary"
                plain
                @click="dialogVisible = true"
                >添加需求
              </el-button>
            </div>
            <!-- 列表 -->
            <transition
              name="el-fade-in-linear"
              v-for="(item, index) of demand"
            >
              <el-card class="show_card" body-style="height:100%;padding:0">
                <a
                  :href="
                    '/#/demandDetail?id=' + item.id + '&idx=' + selected_idx
                  "
                  target="_blank"
                >
                  <div class="customer">{{ item.unit }}</div>
                  <div class="title">{{ item.title }}</div>
                  <div class="detail">{{ item.demand_content }}</div>
                  <div class="date">{{ item.publish_date }}</div>
                  <div class="progress">最新进展:需求确认完毕</div>
                </a>
              </el-card>
            </transition>
          </el-card>
          <pagination
            style="background-color: #f6f6f6; margin-left: 300px"
            v-show="total > 0"
            :total="total"
            :page.sync="page"
            :limit.sync="limit"
            @pagination="getList"
            :pageSizes="sizes"
          />
        </el-main>
      </el-container>
      <!-- 对话框 -->
      <el-dialog :visible.sync="dialogVisible" width="1030px" top="7vh">
        <el-form
          ref="form"
          :model="form"
          label-width="150px"
          label-position="left"
        >
          <el-form-item
            v-for="item in elForm"
            :key="item.fieldName"
            :label="item.label"
            label-position="left"
          >
            <el-input
              v-if="item.type === 'input'"
              :placeholder="item.placeholder"
              v-model="form[item.fieldName]"
              style="width: 833px"
            ></el-input>
            <el-input
              v-if="item.type === 'inputArea'"
              :placeholder="item.placeholder"
              v-model="form[item.fieldName]"
              type="textarea"
              style="width: 833px; min-height: 100px"
            ></el-input>
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="form[item.fieldName]"
            >
              <el-radio-button
                v-for="radio in item.msg"
                :key="radio"
                :label="radio"
              ></el-radio-button>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <el-form
          :inline="true"
          :model="form"
          label-width="150px"
          label-position="left"
        >
          <el-form-item key="file" label="上传图片或其他资料">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">
                只能上传jpg/png文件，且不超过500kb
              </div>
            </el-upload>
          </el-form-item>
          <el-form-item label="解决期限" label-width="100px">
            <el-date-picker
              v-model="form.end_date"
              align="right"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions"
              style="width: 360px"
            >
            </el-date-picker>
          </el-form-item>
          <el-form-item label="最佳预算">
            <el-input
              style="width: 180px"
              v-model="form.best_budget"
            ></el-input>
          </el-form-item>
          <el-form-item label="预算上限" label-width="80px">
            <el-input style="width: 180px" v-model="form.max_budget"></el-input>
          </el-form-item>
          <el-form-item label="单位" label-width="40px">
            <el-input style="width: 320px" v-model="form.unit"></el-input>
          </el-form-item>
          <el-form-item label="技术指标">
            <el-input
              style="width: 360px"
              placeholder="3个左右，逗号’，‘分隔开"
              v-model="form.technical_index"
            ></el-input>
          </el-form-item>
          <el-form-item label="不感兴趣的技术" label-width="110px">
            <el-input
              style="width: 340px"
              placeholder="3个左右，逗号’，‘分隔开"
              v-model="form.uninterested_technolo"
            ></el-input>
          </el-form-item>
          <el-button type="primary" style="width: 100%" @click="Submit"
            >提交需求</el-button
          >
        </el-form>
      </el-dialog>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
/* 容器 */
.container {
  width: 1226px;
  margin: 20px auto;
  height: auto;
  position: relative;
}

/* 侧边栏 */
.aside {
  padding: 0;
  margin-right: 20px;
  min-height: 450px;
  background-color: white;
  margin: 0 auto;
  position: fixed;
}

/* 菜单字体 */
.field-title {
  font-size: 18px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

/* 主要内容 */
.mainContent {
  width: 1086px;
  height: 100%;
  padding: 0;
  margin-left: 140px;
}

.header-title {
  line-height: 40px;
  font-size: 18px;
  font-weight: 900;
}

.header-button {
  float: right;
  padding: 3px 0;
  height: 40px;
  width: 70px;
}

/* 右侧大卡片中的小卡片 */
.show_card {
  padding: 0;
  height: 250px;
  position: relative;
}

/* 悬浮样式 */
.show_card:hover a {
  transition: all 0.5s;
  background-color: #2671b0;
  color: #ffffff;
}

.show_card a {
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

/* 卡片内容 */
.show_card a .customer {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 600;
  margin-left: 20px;
  margin-top: 20px;
}

.show_card a .title {
  font-size: 17px;
  font-weight: 1000;
  margin-bottom: 10px;
  margin-left: 20px;
}

.show_card a .detail {
  max-height: 63px;
  overflow: hidden;
  margin-bottom: 10px;
  margin-left: 20px;
}

.show_card a .date {
  margin-bottom: 10px;
  margin-left: 20px;
}

.show_card a .progress {
  margin-left: 20px;
}

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
  clear: both;
}

/* 修改menu默认悬浮和激活样式 */
.el-menu .el-menu-item:hover {
  outline: 0 !important;
  color: #2e95fb !important;
  background: white !important;
}

.el-menu .el-menu-item.is-active {
  color: #2e95fb !important;
  background: white !important;
}
</style>
