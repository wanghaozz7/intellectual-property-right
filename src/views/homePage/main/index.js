import "@/assets/css/base.css"
import "@/assets/css/patent.css"
import "@/assets/css/specialist.css"
import "@/assets/css/hd.css"
import "@/assets/js/index.js"
import { patentList } from '@/api/patent'
export default {
  name: 'index',
  data () {
    return {
      num1: 1,
      tablaList: {
        list1: [],
        list2: [],
        list3: []
      },
      listQuery: {
        page: 1,
        limit: 12
      },
      patentList: [],
      patentList1: [],
      patentList2: []
    }
  },
  methods: {

    // 获取专利
    getPatent () {
      patentList({ limit: 12, page: 1, ordering: 'id' }).then(res => {
        this.patentList = res.results
      })
      patentList({ limit: 12, page: 2, ordering: 'id' }).then(res => {
        this.patentList1 = res.results
      })
      patentList({ limit: 12, page: 3, ordering: 'id' }).then(res => {
        this.patentList2 = res.results
      })
    }

  },
  created () {
    this.getPatent()
  }
}
