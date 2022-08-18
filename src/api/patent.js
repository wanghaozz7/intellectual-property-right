import request from '@/utils/request'

// export function patentList(query) {
//   return request({
//     url: '/vue-element-template/patent/list',
//     method: 'get',
//     params: query
//   })
// }

// 获取首页专利
export function patentList(query) {
  return request({
    url: '/api/patent/',
    method: 'get',
    params: query
  })
}


//专利详情
export function patentDetail(id) {
  return request({
    url: '/api/patent/' + id + '/',
    method: 'get'
  })
}

//专利咨询
export function patentConsult(data) {
  return request({
    url: '/api/patent_bt_consult/',
    method: 'post',
    data
  })
}

export function fetchPv(pv) {
  return request({
    url: '/vue-element-template/patent/pv',
    method: 'get',
    params: {
      pv
    }
  })
}

// 发布专利
export function createPatent(data) {
  return request({
    url: '/vue-element-admin/patent/create',
    method: 'post',
    data
  })
}

export function updatePatent(data) {
  return request({
    url: '/vue-element-admin/patent/update',
    method: 'post',
    data
  })
}

