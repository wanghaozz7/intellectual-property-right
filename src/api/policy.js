import request from '@/utils/request'
// 法律法规
export function law(query) {
  return request({
    url: '/api/policy',
    method: 'get',
    params: query
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