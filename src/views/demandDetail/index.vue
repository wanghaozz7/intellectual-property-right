<template>
  <div>
    <!-- <el-card class="box-card">
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
    </el-card> -->
    <!-- 顶部 -->
    <top sign="true"></top>
    <!-- 内容 -->
    <div style="width: 1226px;margin: 20px auto;height: 600px;">
      <el-container style="width: 100%;height: 100%;">
        <!-- 侧边栏 -->
        <el-aside style="width: 220px;height: 100%;padding: 0;margin-right: 20px;">
          <el-menu style="width:100%;height: 100%;" active-text-color="#002fa7" @select="idx_change">
            <el-menu-item v-for="(item,index) in field" :index=index>
              <span slot="title">{{ item }}</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <!-- 内容 -->
        <el-main style="width: 986px;height: 100%;padding: 0;">
          <el-card class="box-card" style="width: 100%;height: 100%;">
            <!-- 头部 -->
            <div slot="header" class="clearfix">
              <span style="line-height: 40px;font-size: 18px;">卡片名称</span>
              <el-button style="float: right; padding: 3px 0;height: 40px;width: 70px;" type="primary" plain>添加需求
              </el-button>
            </div>
            <!-- 列表 -->
            <div v-for="item of demand[idx]" style="width: 100%;height: 20px;background-color: pink;">
              <span>{{idx+1}}</span>
              <span>{{idx+2}}</span>
              <span>{{idx+3}}</span>
              <span>{{idx+4}}</span>
              <span>{{idx+1}}</span>
            </div>
          </el-card>
        </el-main>
      </el-container>
    </div>
    <!-- <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div v-for="o in 4" :key="o" class="text item">
        {{ '列表内容 ' + o }}
      </div>
    </el-card> -->
  </div>
</template>

<script src="./index.js"></script>

<style scoped>
/* div{
  display: flex;
  flex-direction:row; */
/* 实现水平居中 */
/* justify-content: center;
} */
/* .box-card{
  width: 970px;
  height: 825px; */
/*实现垂直居中*/
/* position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
} */
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
</style>
