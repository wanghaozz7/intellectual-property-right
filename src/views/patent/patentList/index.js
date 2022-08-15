import '@/assets/css/base.css'
import Pagination from '@/components/Pagination'
import { patentList } from '@/api/patent'
import Top from '@/components/Top/index.vue'
const defaultListQuery = {
  page: 1,
  limit: 10
}

export default {
  name: 'patentList',
  components: { Pagination, Top },
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      total: 0,
      tableData: []
    }
  },
  created() {
    this.getList()
  },
  methods: {

    getList() {
      patentList(this.listQuery).then(res => {
        this.tableData = res.results
        this.total = res.count
      })
    },

    // 前往学生成绩趋势
    toPatentDetail(id) {
      this.$router.push({
        name: 'patentDetail',
        query: { patent: id }
      })
    },

  }
}
