<template>
  <div style="width: 1226px;margin: 20px auto;">
    <div style="margin: 20px 0;font-size: 20px;">
      {{ title }}
    </div>
    <ul>
      <li v-for="item in items"
        style="justify-content: space-between;flex: 1;display: flex;align-items: center;margin-bottom: 20px;">
        <span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 1100px;"><a href="#">
            {{ item.title }}</a></span>
        <span>{{ item.date }}</span>
      </li>
    </ul>
    <pagination style="padding-left: 200px;" v-show="total > 0" :total="total" :page.sync="page" :limit.sync="limit"
      @pagination="getList" :pageSizes=sizes />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue'
export default {
  name: '',
  components: {
    Pagination
  },
  props: {
    items: {
      type: Array,
      default() {
        return [];
      }
    },
    total: {
      type: Number,
      default: 1
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    },
    sizes: {
      type: Array,
      default() {
        return [];
      }
    },
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    getList() {

    }
  }
};
</script>

<style scoped>
</style>