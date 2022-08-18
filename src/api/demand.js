import request from '@/utils/request'
// 获得需求列表
export function demandList(query) {
  return request({
    url: '/api/demand/',
    method: 'get',
    params: query
  })
}
// 获得需求详情
export function demandDetail(id) {
  return request({
    url: '/api/demand/' + id,
    method: 'get'
  })
}


// 新增需求资讯（我感兴趣）
export function demandConsult(data) {
  return request({
    url: '/api/demand_consult/',
    method: 'post',
    data
  })
}

//新增我的需求
export function myDemand(data) {
  return request({
    url: '/api/demand/',
    method: 'post',
    data
  })
}

// 获得个人需求列表
export function personalDemand() {
  return request({
    url: '/api/demand/personal_demand',
    method: 'get'
  })
}

// 获取个人感兴趣需求列表
export function personalDemandConsult(query) {
  return request({
    url: '/api/demand_consult/personal_demand_consult/',
    method: 'get',
    params: query
  })
}