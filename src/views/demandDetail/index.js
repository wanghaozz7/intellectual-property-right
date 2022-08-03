const form = {
  title:'',
  demandArea:null,
  keyword:'',
  demandDetail:'',
  file:'',
  companyName:'',
  phone:'',
}
const elForm = [
  {
    label:'需求标题',
    fieldName:'title',
    type:'input',
    placeholder:'请输入需求标题'
  },
  {
    label:'请选择需求领域',
    fieldName:'demandArea',
    type:'radio',
    msg:[
      '节能环保','生物医药','机械制造','电子信息','化学化工','新能源','材料科学','公共管理','其他'
    ]
  },
  {
    label: '关键词',
    fieldName:'keyword',
    type: 'input',
    placeholder: '3个左右，逗号’，‘分隔开',
  },
  {
    label: '请详细描述需求',
    fieldName:'demandDetail',
    type: 'inputArea',
    placeholder: '友情提示：可填写目前技术工艺的参数，性能等，目前场景等信息，注意保护机密信息哦',
  },
  {
    label: '你也可以上传图片或更多其他资料',
    fieldName:'file',
    type: 'upload',
  },
  {
    label: '请输入企业名',
    fieldName:'companyName',
    type: 'input',
    placeholder: '',
  },
  {
    label: '请填写联系电话',
    fieldName:'phone',
    type: 'input',
    placeholder: '仅限’-‘和数字',
  }
]
export default {
  name: 'index',
  data(){
    return{
      form:form,
      elForm:elForm
    }
  },
  methods:{
    Submit(){
      console.log(this.form)
    }
  }
}
