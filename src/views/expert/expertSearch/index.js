import '@/assets/expertSearch_css/index.css'
import Pagination from '@/components/Pagination' // secondary package based on el-pagination
import Top from '@/views/expert/components/top/index.vue'
import { talentList } from '@/api/talent'

const defaultListQuery = {
  page: 1,
  limit: 10
}

export default {
  name: 'ExpertSearch',
  components: { Pagination, Top },
  data () {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      total: 0,
      talentList: [],
      selectedIndex: 0,
      searchRangeList: ['不限', '姓名', '领域', '标签', '机构', '论文', '专利', '项目'],
      //  特殊荣誉
      SpecialHonorIndex: -1,
      SpecialHonorList: ['新世纪优秀人才(274)', '杰出青年基金(274)', '长江学者(274)', '万人计划(274)', '货架自然科学基金优秀青年科学积基金(274)'],
      //  H因子范围
      H_factorIndex: -1,
      H_factorList: ['未识别(229652)', '0-5(81168)', '6-10(19687)', '11-15(5933)', '16-20(2306)', '21-25(955)', '>25(1019)'],
      //  领域范围
      Domain_scopeIndex: -1,
      Domain_scopeList: ['本实用新型(14270)', '制备(12355)', '临床检验诊断学(7041)', '肿瘤学(6601)', '中西医结合(6322)', '护理学(6030)', '应用(274)'],
      // 机构高校
      SchoolIndex: -1,
      SchoolList: ['华南理工大学(23323)', '中山大学(16066)', '广东工业大学(10998)', '华南农业大学(9275)', '保洁公司(8967)', '暨南大学(8966)'],
      //  地域
      areaList: '',
      searchCondition: {}
    }
  },
  created () {
    this.listQuery.city = this.$route.query.city
    this.getTalent()
    this.area()
  },
  filters: {
    filterNumber (value) {
      const patter = /^(.*)(?=\()/
      return patter.exec(value)[0]
    }
  },
  methods: {
    // 获取专家列表
    getTalent () {
      talentList(this.listQuery).then(res => {
        this.talentList = res.results
        for (let i = 0; i < res.results.length; i++) {
          if (res.results[i].domains) this.talentList[i].domains = res.results[i].domains.join('/')
        }
        this.total = res.count
      })
    },

    getTopic (index) {
      this.selectedIndex = index
    },
    // 特殊荣誉
    SpecialHonor (index) {
      this.SpecialHonorIndex = index
      if (index > -1) this.searchCondition.SpecialHonor = this.SpecialHonorList[this.SpecialHonorIndex]
    },
    // H因子范围
    H_factor (index) {
      this.H_factorIndex = index
      if (index > -1) this.searchCondition.H_factor = this.H_factorList[this.H_factorIndex]
    },
    //  领域范围
    Domain_scope (index) {
      this.Domain_scopeIndex = index
      if (index > -1) this.searchCondition.Domain_scope = this.Domain_scopeList[this.Domain_scopeIndex]
    },
    //  高校机构
    School (index) {
      this.SchoolIndex = index
      if (index > -1) this.searchCondition.School = this.SchoolList[this.SchoolIndex]
    },
    // 地域
    area () {
      this.areaList = this.listQuery.city
      this.searchCondition.city = this.areaList
    },
    // 取消
    cancel (index) {
      if (index === 'city') return
      const newSearchCondition = this.searchCondition
      delete newSearchCondition[index]
      // 更新searchCondition列表
      this.searchCondition = newSearchCondition
      if (index === 'School') this.School(-1)
      else if (index === 'Domain_scope') this.Domain_scope(-1)
      else if (index === 'H_factor') this.H_factor(-1)
      else if (index === 'SpecialHonor') this.SpecialHonor(-1)
      // 强制更新
      this.$forceUpdate()
    }
  }
}
