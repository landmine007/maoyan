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

/**
 * 正在热映电影数据加载更多
 * method: get
 * url: /ajax/moreComingList
 */
export function getMoreComingList(params) {
  return request({
    method: 'GET',
    url: '/ajax/moreComingList',
    params
  })
}

/**
 * 即将上映近期最受期待
 * method: get
 * url: /ajax/mostExpected
 */
export function getMostExpected(params) {
  return request({
    method: 'GET',
    url: '/ajax/mostExpected',
    params
  })
}

/**
 * 城市列表数据
 * method: get
 * url: /data/citys.json
 */
export function getCitys(params) {
  return request({
    method: 'GET',
    url: '/data/citys.json',
    params
  })
}
