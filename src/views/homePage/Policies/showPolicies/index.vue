<template>
  <div class="container">
    <div class="title">
      <span>{{ title }}</span>
      <span><a :href=link style="color:black;" target="_blank">更多</a></span>
    </div>
    <el-divider></el-divider>
    <ul>
      <li v-for="item in items" class="list-item">
        <span class="list-item-title"><a href="#">{{ item.title }}</a></span>
        <span>{{ item.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'showPolicies',
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    title: '',
    link: ''
  }
};
</script>

<style scoped>
/* 容器 */
.container {
  width: 600px;
  float: left;
  height: 600px;
}

/* 标题 */
.title {
  margin-top: 13px;
  font-size: 18px;
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* 分布在两侧 */
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
}

.list-item {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 14px;
}

.list-item-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 500px;
}



/* 分割线 */
.el-divider--horizontal {
  margin: 12px 0 24px 0;
}
</style>