import request from '@/utils/request';

// 登录
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data
  })
}
// 获得个人信息
export function getInfo() {
  return request({
    url: '/user/info',
    method: 'get'
  })
}
// 注册
export function register(data) {
  return request({
    url: '/register',
    method: 'post',
    data
  })
}