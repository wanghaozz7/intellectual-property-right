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
  data() {
    return {
      listQuery: Object.assign({}, defaultListQuery),
      total: 0,
      talentList: [],
      selectedIndex: 0,
      searchRangeList: ['不限', '姓名', '领域', '标签', '机构', '论文', '专利', '项目'],
      //  特殊荣誉
      SpecialHonorIndex: -1,
      SpecialHonorList: ['新世纪优秀人才', '杰出青年基金', '长江学者', '万人计划', '货架自然科学基金优秀青年科学积基金'],
      //  H因子范围
      H_factorIndex: -1,
      H_factorList: ['未识别', '0-5', '6-10', '11-15', '16-20', '21-25', '>25'],
      //  领域范围
      Domain_scopeIndex: -1,
      Domain_scopeList: ['本实用新型', '制备', '临床检验诊断学', '肿瘤学', '中西医结合', '护理学', '应用'],
      // 机构高校
      SchoolIndex: -1,
      SchoolList: ['华南理工大学', '中山大学', '广东工业大学', '华南农业大学', '保洁公司', '暨南大学'],
      //  地域
      areaIndex: -1,
      areaList: ['广州市', '韶关市', '深圳市', '珠海市', '汕头市'],
      searchCondition: {}
    }
  },
  created() {
    this.listQuery.city = this.$route.query.city
    this.getTalent()
    this.area(0)

  },
  filters: {
    filterNumber(value) {
      const patter = /^(.*)(?=\()/
      return patter.exec(value)[0]
    }
  },
  methods: {
    // 获取专家列表
    getTalent() {
      talentList(this.listQuery).then(res => {
        this.talentList = res.results

        console.log(this.talentList);
        for (let i = 0; i < res.results.length; i++) {
          if (res.results[i].domains) this.talentList[i].domains = res.results[i].domains.join('/')
        }
        this.total = res.count
      })
    },

    getTopic(index) {
      this.selectedIndex = index
    },
    // 特殊荣誉
    SpecialHonor(index) {
      this.SpecialHonorIndex = index
      if (index > -1) this.searchCondition.SpecialHonor = this.SpecialHonorList[this.SpecialHonorIndex]
    },
    // H因子范围
    H_factor(index) {
      this.H_factorIndex = index
      if (index > -1) this.searchCondition.H_factor = this.H_factorList[this.H_factorIndex]
    },
    //  领域范围
    Domain_scope(index) {
      this.Domain_scopeIndex = index
      if (index > -1) this.searchCondition.Domain_scope = this.Domain_scopeList[this.Domain_scopeIndex]
      this.getTalent();
    },
    //  高校机构
    School(index) {
      this.SchoolIndex = index
      if (index > -1) this.searchCondition.School = this.SchoolList[this.SchoolIndex]
    },
    // 地域
    area(idx) {
      this.areaIndex = idx;
      this.searchCondition.city = this.areaList[this.areaIndex];
    },
    // 取消
    cancel(index) {
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
