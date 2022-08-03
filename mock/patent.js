const Mock = require('mockjs')

const List = []
const count = 50

const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'
// 扩展
Mock.Random.extend({
  TypeOfPatent: function() {
    let TypeOfPatent = [
      {
        type:1,
        msg:'发明专利'
      },
      {
        type:2,
        msg:'实用新型'
      },
      {
        type:3,
        msg:'外观设计'
      },
      {
        type:4,
        msg:'其他知识产权'
      }]
    return this.pick(TypeOfPatent)
  },
  currentLegalStatus:function(){
    let currentLegalStatus = [
      {
        type:1,
        msg:'申请'
      },
      {
        type:2,
        msg:'受理'
      },
      {
        type: 3,
        msg:'初审合格'
      },
      {
        type:4,
        msg:'实审'
      },
      {
        type: 5,
        msg:'公布'
      },
      {
        type: 6,
        msg:'审查意见'
      },
      {
        type: 7,
        msg:'授权'
      },
      {
        type: 8,
        msg:'下证'
      }
    ]
    return this.pick(currentLegalStatus)
  },
  TypeOfObligee:function() {
    let TypeOfObligee = [
      {
        type:1,
        msg:'发明人，设计人所在单位'
      },
      {
        type: 2,
        msg:"发明人,设计人",
      },
      {
        type: 3,
        msg:'共同发明人，设计人'
      }
    ]
    return this.pick(TypeOfObligee)
  }
})
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    applicationId:'@id',
    applicationTime: +Mock.Random.date('T'),
    openId: '@first',
    openTime: +Mock.Random.date('T'),
    obligee: ['@first','@first'],
    inventor: ['@first'],
    address: '@province@city@county',
    agency: '@first',
    agencyPerson: '@first',
    TypeOfPatent:Mock.Random.TypeOfPatent() ,
    IPCMainId:'@float(0, 100, 2, 2)',
    IPCId:'@float(0, 100, 2, 2)',
    CPCode:'@float(0, 100, 2, 2)',
    currentLegalStatus: Mock.Random.currentLegalStatus(),
    currentLegalEvent: '@first',
    TypeOfObligee: Mock.Random.TypeOfObligee(),
    abstract: '@paragraph',
    img:'http://b2c.gaohangip.com/Picture/0000004.png?x-oss-process=image/resize,m_fill,w_190,h_190/sharpen,100'
    // img:'../src/assets/img/patent.png'
  }))
}

module.exports = [
  {
    url: '/vue-element-template/patent/list',
    type: 'get',
    response: config => {
      const { applicationId, obligee, TypeOfPatent,applicationTime,agencyPerson, page = 1, limit = 20, sort } = config.query
      let mockList = List.filter(item => {
        if (obligee && item.obligee === '') return false
        if (TypeOfPatent && item.TypeOfPatent !== +TypeOfPatent) return false
        if (applicationId && item.applicationId.indexOf(applicationId) < 0) return false
        if (applicationTime === '') return false
        if (agencyPerson === '') return  false
        return true
      })
      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/vue-element-template/patent/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const patent of List) {
        if (patent.id === +id) {
          return {
            code: 20000,
            data: patent
          }
        }
      }
    }
  },

  {
    url: '/vue-element-admin/patent/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/vue-element-admin/patent/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/vue-element-admin/patent/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]

