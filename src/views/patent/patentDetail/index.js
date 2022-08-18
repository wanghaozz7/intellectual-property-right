import "@/assets/css/base.css"
import "@/assets/css/detail.css"

import { patentDetail, patentConsult } from '@/api/patent'
import ElImageViewer from 'element-ui/packages/image/src/image-viewer'

export default {
  name: "patentDetail",
  components: { ElImageViewer },
  data() {
    return {
      patentId: '',
      patentInfo: {},
      previewImg: false,
      imgUrl: [],
      detailList: [],
      abstract: '本装置包括：具有多级的压缩单元，所述单元被供应来自低温的气体并在电机供应压力下供应气体；再液化系统，具有液体到所述温度的出口和交换器，其布置在所述温蒂和所述压缩单元之间，以在蒸发气体进入所述压缩单元之前加热来自所述的所述蒸发气体。来自低温的气体并在电机供应压力下供应气体；再液化系统，具有液体到所述温度的出口和交换器，其布置在所述温蒂和所述压缩单元之间，以在蒸发气体进入所述压缩单元之前加热来自所述的所述蒸发气体。',
      dialogFormVisible: false,
      form: {
        name: '',
        telephone: '',
        patent_bt: ''
      }
    }
  },
  created() {
    this.patentId = this.$route.query.patent
    this.getPatentDetail()
  },
  methods: {

    // 获取专利详情
    getPatentDetail() {
      patentDetail(this.patentId).then(res => {
        this.patentInfo = res
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

    onclickImg(index) {
      this.imgUrl = this.patentInfo.base_image_lst
      this.previewImg = true
      const fileListLength = this.patentInfo.base_image_lst.length
      const temp1 = this.patentInfo.base_image_lst.slice(index, fileListLength)
      const temp2 = this.patentInfo.base_image_lst.slice(0, index)
      this.imgUrl = temp1.concat(temp2)
    },
    // 关闭预览图片
    closePreviewImage() {
      this.previewImg = false
    },
    consult_submit() {
      this.dialogFormVisible = false;
      this.form.patent_bt = this.patentId;
      patentConsult(this.form).then(res => {
        console.log('patentConsult', res);
        this.$message({
          message: '提交咨询成功！',
          type: 'success'
        });
      }).catch(err => {
        console.log(err);
        this.$message.error('提交咨询失败！');
      });
    }
  }
}
