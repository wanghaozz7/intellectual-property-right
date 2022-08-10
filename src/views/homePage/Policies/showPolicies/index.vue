<template>
  <div style="width: 600px;float: left;height: 600px;">
    <h3 style="margin-top: 13px;">{{ title }}</h3>
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
  }
};
</script>

<style scoped>
</style>