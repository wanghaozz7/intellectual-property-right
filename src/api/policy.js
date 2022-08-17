import request from '@/utils/request'
// 法律法规
export function law(query) {
  return request({
    url: '/api/policy',
    method: 'get',
    params: query
  })
}
// 法规详情
export function lawDetail(id) {
  return request({
    url: '/api/policy/' + id,
    method: 'get'
  })
}
// 保护案例
export function cases(query) {
  return request({
    url: '/api/case',
    method: 'get',
    params: query
  })
}
// 案例详情
export function caseDetail(id) {
  return request({
    url: '/api/case/' + id,
    method: 'get'
  })
}