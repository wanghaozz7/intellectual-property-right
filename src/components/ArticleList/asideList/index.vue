<template>
  <div class="container">
    <div class="title">
      <span>{{ title }}</span>
      <span><a :href=link style="color:rgb(89, 87, 87);" target="_blank">更多</a></span>
    </div>
    <el-divider></el-divider>
    <ul>
      <li v-for="item in listItems" class="content">
        <span class="content-title">
          <a href="#">{{ item.title }}</a></span>
        <span>{{ item.date }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    listItems: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: ''
    }
  }
};
</script>

<style scoped>
.el-divider--horizontal {
  margin: 10px 0;
}

.container {
  width: 100%;
  height: 48%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border: 1px solid rgb(230, 227, 227);
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 10px;
}

.title {
  font-size: 18px;
  font-weight: 800;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
}

.content {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 7px;
  font-size: 14px;
}

.content-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 80%;
}
</style>