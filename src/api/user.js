import request from '@/utils/request';

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: 'user/info',
    method: 'get'
  })
}