<template>
  <div style="width: 1226px;margin: 20px auto;">
    <el-container>
      <el-main style="padding: 0;">
        <div style="margin: 0 0 20px 0;font-size: 20px;">
          {{ title }}
        </div>
        <ul style="float: left;">
          <li v-for="item in items"
            style="justify-content: space-between;flex: 1;display: flex;align-items: center;margin-bottom: 20px;width: 850px;">
            <span style="overflow: hidden;text-overflow: ellipsis;white-space: nowrap;width: 600px;"><a href="#">
                {{ item.title }}</a></span>
            <span>{{ item.date }}</span>
          </li>
        </ul>
      </el-main>
      <el-aside width="350px" style="padding: 0;background-color: #fff;">
        <AsideList :listItems="list1.items" :title="list1.title" :link="list1.link" style="margin-bottom: 4%;"></AsideList>
        <AsideList :listItems="list2.items" :title="list2.title" :link="list2.link"></AsideList>
      </el-aside>
    </el-container>
    <pagination style="padding-left: 200px;" v-show="total > 0" :total="total" :page.sync="page" :limit.sync="limit"
      @pagination="getList" :pageSizes=sizes />
  </div>
</template>

<script>
import Pagination from '@/components/Pagination/index.vue'
import AsideList from '@/components/ArticleList/asideList/index.vue'
export default {
  name: '',
  components: {
    Pagination,
    AsideList
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
    },
    list1: {
      type: Object,
      default() {
        return {}
      }
    },
    list2: {
      type: Object,
      default() {
        return {}
      }
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