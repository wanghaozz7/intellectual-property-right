import request from '@/utils/request'
// 资讯列表
export function newsList(query) {
  return request({
    url: '/api/news/',
    method: 'get',
    params: query
  })
}
// 资讯详情
export function newsDetail(id) {
  return request({
    url: '/api/news/' + id,
    method: 'get'
  })
}
// 公告列表
export function notifyList() {
  return request({
    url: '/api/announce',
    method: 'get'
  })
}
// 公告详情
export function notifyDetail(id) {
  return request({
    url: '/api/announce/' + id,
    method: 'get'
  })
}