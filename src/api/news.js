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
export function newsDetail() {
  return request({
    url: '/api/news/1',
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