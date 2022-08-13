import "@/assets/css/base.css"
import "@/assets/css/detail.css"

import { patentDetail } from '@/api/patent'
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'

const detailLIst = [
  {
    name: '申请号',
    value: 'CN201480054321.8'
  },
  {
    name: '公开（公告）号',
    value: 'CN105593114A'
  },
  {
    name: '申请（专利权）人',
    value: '克莱斯达公司'
  },
  {
    name: '主分类号',
    value: 'B63B25/16'
  },
  {
    name: '地址',
    value: '法国赫辛古'
  },
  {
    name: '优先权',
    value: '20140625 FR1455931;20130912 GB1316227.6'
  },
  {
    name: '代理人',
    value: '赫文博'
  },
  {
    name: '国际公布',
    value: '20150319 WO/2015/036708'
  },
  {
    name: '申请日',
    value: '20140911'
  },
  {
    name: '公开日',
    value: '20160518'
  },
  {
    name: '发明人',
    value: 'M-拉铘'
  },
  {
    name: '分类号',
    value: 'B63B25/16F17C5/06F17C9/04F25J1/00F25j1/02'
  },
  {
    name: '国省代码',
    value: '法国'
  },
  {
    name: '代理机构',
    value: '北京市铸事务所'
  },
  {
    name: '国际申请',
    value: '20140911 PCT/FR2014/052258'
  },
  {
    name: '进入国家日期',
    value: '20160331'
  },
]
export default {
  name: "patentDetail",
  components: { ElImageViewer },
  data () {
    return {
      patentInfo: {},
      previewImg: false,
      imgUrl: [],
      detailLIst,
      abstract: '本装置包括：具有多级的压缩单元，所述单元被供应来自低温的气体并在电机供应压力下供应气体；再液化系统，具有液体到所述温度的出口和交换器，其布置在所述温蒂和所述压缩单元之间，以在蒸发气体进入所述压缩单元之前加热来自所述的所述蒸发气体。来自低温的气体并在电机供应压力下供应气体；再液化系统，具有液体到所述温度的出口和交换器，其布置在所述温蒂和所述压缩单元之间，以在蒸发气体进入所述压缩单元之前加热来自所述的所述蒸发气体。',
      dialogFormVisible:false,
      form:{
        
      }
    }
  },
  created () {
    this.patentId = this.$route.query.patent
    this.getPatentDetail()
  },
  methods: {

    // 获取专利详情
    getPatentDetail () {
      patentDetail(this.patentId).then(res => {
        this.patentInfo = res
        // this.detailList = [
        //   { name: '申请号', value: res.application_no },
        //   { name: '公开（公告）号', value: res.publication_no },
        //   { name: '申请（专利权）人', value: res.applicant_people },
        //   { name: '主分类号', value: res.main_classification_ipcr },
        //   { name: '地址', value: res.applicant_address },
        //   { name: '代理人', value: res.agent_names },
        //   { name: '申请日', value: res.application_info.date },
        //   { name: '公开日', value: res.publication_info.date },
        //   { name: '发明人', value: res.inventors },
        //   { name: '分类号', value: res.classification_ipcr },
        //   { name: '国省代码', value: 'CN' },
        //   { name: '代理机构', value: res.agent_org_name },
        // ]
        this.detailList = [
          { name: '申请号', value: res.application_no },
          { name: '公开（公告）号', value: res.publication_no },
          { name: '申请（专利权）人', value: res.applicants },
          { name: '主分类号', value: res.ic1 },
          { name: '地址', value: res.address },
          { name: '代理人', value: res.agents },
          { name: '申请日', value: res.application_date },
          { name: '公开日', value: res.publication_date },
          { name: '发明人', value: res.inventors },
          { name: '分类号', value: res.classification_num },
          { name: '代理机构', value: res.agent_org_name },
        ]
      })
    },

    onclickImg (index) {
      this.imgUrl = this.patentInfo.base_image_lst
      this.previewImg = true
      const fileListLength = this.patentInfo.base_image_lst.length
      const temp1 = this.patentInfo.base_image_lst.slice(index, fileListLength)
      const temp2 = this.patentInfo.base_image_lst.slice(0, index)
      this.imgUrl = temp1.concat(temp2)
    },
    // 关闭预览图片
    closePreviewImage () {
      this.previewImg = false
    },
  }
}
