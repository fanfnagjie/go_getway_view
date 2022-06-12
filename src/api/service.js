import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/service/service_list',
    method: 'get',
    params: query
  })
}

export function serviceDetail(query) {
  return request({
    url: '/service/service_detail',
    method: 'get',
    params: query
  })
}

export function serviceAddHttp(data) {
  return request({
    url: '/service/service_add_http',
    method: 'post',
    params: data
  })
}

export function serviceUpdateHttp(data) {
  return request({
    url: '/service/service_update_http',
    method: 'post',
    params: data
  })
}
