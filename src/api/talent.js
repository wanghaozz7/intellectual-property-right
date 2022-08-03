import request from '@/utils/request'

export function talentList (data) {
  return request({
    url: '/api/talent/',
    method: 'get',
    params: data
  })
}

// 获取专家基本信息
export function talentDetail (id) {
  return request({
    url: '/api/talent/' + id + '/',
    method: 'get'
  })
}

// 获取专家的合作伙伴
export function talentCoAuthor (id) {
  return request({
    url: '/api/co_author/' + id + '/',
    method: 'get'
  })
}

// 获取专家的同领域专家
export function talentSameDomains (id) {
  return request({
    url: '/api/same_domains/' + id + '/',
    method: 'get'
  })
}

// 获取专家的论文，专利和项目
export function talentItems (id) {
  return request({
    url: '/api/talent_items/' + id + '/',
    method: 'get'
  })
}
// 获取某个专家的同机构专家
export function talentSameOrganization (id) {
  return request({
    url: '/api/same_orgs/' + id + '/',
    method: 'get'
  })
}
