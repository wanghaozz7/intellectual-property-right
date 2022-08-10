import '@/assets/css/base.css'
import '@/assets/expertDetail_css/index.css'
import Top from '@/views/expert/components/top/index.vue'
import { talentDetail, talentCoAuthor, talentSameDomains, talentItems, talentSameOrganization } from '@/api/talent'

export default {
  name: 'expertDetail',
  components: {
    Top
  },
  data () {
    return {
      uri: '',
      talent: {},
      coAuthor: [],
      sameDomains: [],
      sameOrgs: [],
      paperList: [],
      patentList: [],
      projectList: [],
      tag_active: 'paper',
      selected_tab:'产出和成果'
    }
  },
  created () {
    this.uri = this.$route.query.uri
    this.getTalentDetail()
    this.getCoAuthor()
    this.getTalentItems()
    this.getSameDomains()
    this.getSameOrgs()
  },
  methods: {
    // 获取专家的基本信息
    getTalentDetail () {
      talentDetail(this.uri).then(res => {
        this.talent = res

        // 所属领域
        if (res.domains) this.talent.domains = res.domains.join('/')

        // 学术年龄
        const nowDate = new Date()
        const nowYear = nowDate.getFullYear()
        if (res.firstPaperYear > 0) {
          this.talent.firstPaperYear = nowYear - res.firstPaperYear + '年'
        } else {
          this.talent.firstPaperYear = '未识别'
        }

        // 级别评估
        const hIndexLevel = ['未识别', '初级', '中级', '高级', '优秀', '杰出', '卓越']
        this.talent.hIndexLevel = hIndexLevel[res.hIndexLevel]

        // 学术水平位置
        if (res.scholarLevel) {
          this.talent.scholarLevel = 'Top ' + res.scholarLevel + '%'
        } else {
          this.talent.scholarLevel = '未识别'
        }

        // 自然基金排名
        if (res.nsfcLevel) {
          this.talent.nsfcLevel = 'Top ' + res.nsfcLevel + '%'
        } else {
          this.talent.nsfcLevel = '未识别'
        }
      })
    },

    // 获取专家的合作伙伴
    getCoAuthor () {
      talentCoAuthor(this.uri).then(res => {
        this.coAuthor = res.coAuthors
      })
    },

    // 获取专家的同领域专家
    getSameDomains () {
      talentSameDomains(this.uri).then(res => {
        this.sameDomains = res.sameDomains
      })
    },

    // 获取专家的专利，论文和项目
    getTalentItems () {
      talentItems(this.uri).then(res => {
        if (res.paper) {
          for (let i = 0; i < res.paper.length; i++) {
            if (res.paper[i].kws) {
              res.paper[i].kws = res.paper[i].kws.split(';;')
            } else {
              res.paper[i].kws = []
            }
          }
          this.paperList = res.paper
        }
        if (res.patent) this.patentList = res.patent
        if (res.nps) this.projectList = res.nps
      })
    },
    // 获取专家的同机构专家
    getSameOrgs () {
      talentSameOrganization(this.uri).then(res => {
        this.sameOrgs = res.sameOrgs
      })
    },
    achievements_tag_handle (tab, event) {
      console.log(tab, event);
    }
  }
}
