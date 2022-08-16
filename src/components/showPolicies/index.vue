<template>
  <div style="width: 600px;float: left;height: 600px;">
    <div style="margin-top: 13px;font-size: 18px;font-weight: 800;font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif">
      <span>{{ title }}</span>
      <a :href=link style="color:rgb(89, 87, 87);margin-left: 490px;" target="_blank">更多</a>
    </div>
    <el-divider></el-divider>
    <ul>
      <li v-for="item in items"
        style="justify-content: space-between;flex: 1;display: flex;align-items: center;margin-bottom: 14px;">
        <span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 500px;"><a href="#">
            {{ item.title }}</a></span>
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
    link:''
  }
};
</script>

<style scoped>
/* 分割线 */
.el-divider--horizontal {
  margin: 12px 0 24px 0;
}
</style>