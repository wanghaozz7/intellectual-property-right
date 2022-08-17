import request from '@/utils/request'

export function demandList(query) {
  return request({
    url: '/api/demand/',
    method: 'get',
    params: query
  })
}