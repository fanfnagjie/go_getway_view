import request from '@/utils/request'

export function serviceList(query) {
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

export function serviceDelete(query) {
  return request({
    url: '/service/service_delete',
    method: 'get',
    params: query
  })
}

export function serviceStat(query) {
  return request({
    url: '/service/service_stat',
    method: 'get',
    params: query
  })
}
