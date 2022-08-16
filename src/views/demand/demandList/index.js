const form = {
  title: '',
  demandArea: null,
  keyword: '',
  demandDetail: '',
  file: '',
  companyName: '',
  phone: '',
}
const elForm = [
  {
    label: '需求标题',
    fieldName: 'title',
    type: 'input',
    placeholder: '请输入需求标题'
  },
  {
    label: '请选择需求领域',
    fieldName: 'demandArea',
    type: 'radio',
    msg: [
      '节能环保', '生物医药', '机械制造', '电子信息', '化学化工', '新能源', '材料科学', '公共管理', '其他'
    ]
  },
  {
    label: '关键词',
    fieldName: 'keyword',
    type: 'input',
    placeholder: '3个左右，逗号’，‘分隔开',
  },
  {
    label: '请详细描述需求',
    fieldName: 'demandDetail',
    type: 'inputArea',
    placeholder: '友情提示：可填写目前技术工艺的参数，性能等，目前场景等信息，注意保护机密信息哦',
  },
  {
    label: '上传图片或其他资料',
    fieldName: 'file',
    type: 'upload',
  },
  {
    label: '请输入企业名',
    fieldName: 'companyName',
    type: 'input',
    placeholder: '',
  },
  {
    label: '请填写联系电话',
    fieldName: 'phone',
    type: 'input',
    placeholder: '仅限’-‘和数字',
  }
]
const field = ['节能环保', '生物医药', '机械制造', '电子信息', '化工化学', '新能源', '材料科学', '其他'];
const demand = [
  [
    {
      customer: '江门市某装备技术有限公司',
      title: '寻求一种用于350摄氏度铁的表面的隔热保温新材料',
      details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
    公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
      date: '2022-06-16 14:22',
      progress: '专家相应需求'
    },
    {
      customer: '江门市某装备技术有限公司',
      title: '寻求一种用于350摄氏度铁的表面的隔热保温新材料',
      details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
    公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
      date: '2022-06-16 14:22',
      progress: '专家相应需求'
    },
    {
      customer: '江门市某装备技术有限公司',
      title: '寻求一种用于350摄氏度铁的表面的隔热保温新材料',
      details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
    公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
      date: '2022-06-16 14:22',
      progress: '专家相应需求'
    }
  ], [{
    customer: '东莞理工学院',
    title: '手性药物中间体R-3羟基丁酸甲酯和R-1,3丁二醇制备新技术推广',
    details: `开发以可再生生物质制备R-3-羟基丁酸甲酯和R-1，3丁二醇的全新技术，R-3-羟基丁酸甲酯和R-1，3丁二醇纯度>95%。`,
    date: '2020-08-10 10:54',
    progress: '需求确认完毕'
  }, {
    customer: '东莞理工学院',
    title: '手性药物中间体R-3羟基丁酸甲酯和R-1,3丁二醇制备新技术推广',
    details: `开发以可再生生物质制备R-3-羟基丁酸甲酯和R-1，3丁二醇的全新技术，R-3-羟基丁酸甲酯和R-1，3丁二醇纯度>95%。`,
    date: '2020-08-10 10:54',
    progress: '需求确认完毕'
  }], [{
    customer: '广东某车企',
    title: '寻求用于新能源汽车变速箱的电磁阀的技术',
    details: `磁滞测试和调压特性测试条件——正常工作5次后，从0A-1A-0A,依100mA的步距给电磁阀供电，记录平均供应流量和控制试验期间的电流特性绘制I-P值，包含特征曲线和迟滞曲线，油温80±3℃ 15秒、油温-30±3℃ 60秒（JWS3320）供油压力为2000±10kpa。`,
    date: '2021-12-03 07:52',
    progress: '需求确认完毕'
  }, {
    customer: '广东某车企',
    title: '寻求用于新能源汽车变速箱的电磁阀的技术',
    details: `磁滞测试和调压特性测试条件——正常工作5次后，从0A-1A-0A,依100mA的步距给电磁阀供电，记录平均供应流量和控制试验期间的电流特性绘制I-P值，包含特征曲线和迟滞曲线，油温80±3℃ 15秒、油温-30±3℃ 60秒（JWS3320）供油压力为2000±10kpa。`,
    date: '2021-12-03 07:52',
    progress: '需求确认完毕'
  }, {
    customer: '广东某车企',
    title: '寻求用于新能源汽车变速箱的电磁阀的技术',
    details: `磁滞测试和调压特性测试条件——正常工作5次后，从0A-1A-0A,依100mA的步距给电磁阀供电，记录平均供应流量和控制试验期间的电流特性绘制I-P值，包含特征曲线和迟滞曲线，油温80±3℃ 15秒、油温-30±3℃ 60秒（JWS3320）供油压力为2000±10kpa。`,
    date: '2021-12-03 07:52',
    progress: '需求确认完毕'
  }, {
    customer: '广东某车企',
    title: '寻求用于新能源汽车变速箱的电磁阀的技术',
    details: `磁滞测试和调压特性测试条件——正常工作5次后，从0A-1A-0A,依100mA的步距给电磁阀供电，记录平均供应流量和控制试验期间的电流特性绘制I-P值，包含特征曲线和迟滞曲线，油温80±3℃ 15秒、油温-30±3℃ 60秒（JWS3320）供油压力为2000±10kpa。`,
    date: '2021-12-03 07:52',
    progress: '需求确认完毕'
  }], [{
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }, {
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }], [{
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }, {
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }], [{
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }, {
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }], [{
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }, {
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }], [{
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }, {
    customer: '江门市某装备技术有限公司',
    title: '江门市某装备技术有限公司',
    details: `寻求一种在350摄氏度铁的表面喷一层隔热保温的新材料，使温度降低到60摄氏度，使用面积是60*60*2000(mm)，一个设备有4块，一年使用量至少200块，主要是应用在船舶设备。
  公司是广东省智能制造研究所为落实广东省科学院与江门市政府签署的战略合作协议，联合欧佩德伺服电机节能系统有限公司共同投资、注册成立的智能制造综合性服务公司，为省智能所江门中心在江门落地建设的综合应用服务公司。`,
    date: '2022-06-16 14:22',
    progress: '专家相应需求'
  }]]
import top from '@/components/Top/index.vue'
export default {
  name: 'index',
  data() {
    return {
      form,
      elForm,
      field,
      demand,
      selected_idx: 0,
      dialogVisible: false
    }
  },
  methods: {
    Submit() {
      console.log(this.form)
    },
    idx_change(key) {
      this.selected_idx = key;
    }
  },
  components: {
    top
  }
}
