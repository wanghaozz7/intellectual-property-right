<template>
  <div class="out-side-container">
    <el-container>
      <el-main style="padding: 0;min-height: 600px;">
        <div style="margin: 0 0 20px 0;font-size: 20px;">
          {{ title }}
        </div>
        <ul style="float: left;">
          <li v-for="item in items" class="list">
            <span class="list-title">
              <router-link :to="{ 'name': 'articleDetail', 'query': { 'type': link_type, 'id': item.id } }"
                target="_blank">
                {{ item.title }}
              </router-link>
            </span>
            <span>{{ item.publish_date }}</span>
          </li>
        </ul>
      </el-main>
      <el-aside width="350px" style="padding: 0;background-color: #fff;">
        <AsideList :listItems="list1.items" :title="list1.title" :link="list1.link" style="margin-bottom: 4%;"
          :aside_type="aside1">
        </AsideList>
        <AsideList :listItems="list2.items" :title="list2.title" :link="list2.link" :aside_type="aside2"></AsideList>
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
    },
    link_type: {
      type: String,
      default: ''
    },
    aside1: {
      type: String,
      default: ''
    },
    aside2: {
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
.out-side-container {
  width: 1226px;
  margin: 20px auto;
}

.list {
  justify-content: space-between;
  flex: 1;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 850px;
}

.list-title {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 600px;
}
</style>