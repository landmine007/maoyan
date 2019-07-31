import request from '@/utils/request'

/**
 * 获取正在热映电影数据
 * method: get
 * url: /ajax/movieOnInfoList
 */
export function getMovieOnInfoList(params) {
  return request({
    method: 'GET',
    url: '/ajax/movieOnInfoList',
    params
  })
}
