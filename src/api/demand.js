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



// 新增需求资讯（我感兴趣）
export function demandConsult(data) {
  return request({
    url: '/api/demand_consult/',
    method: 'post',
    data
  })
}

// 获得个人需求列表
export function personalDemand(query) {
  return request({
    url: '/api/demand/personal_demand',
    method: 'get',
    params: query
  })
}