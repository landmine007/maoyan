import Vue from 'vue'
import Router from 'vue-router'

import cinemaRouter from './module/cinema'
import movieRouter from './module/movie'
import mineRouter from './module/mine'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/movie'
    },
    cinemaRouter,
    movieRouter,
    mineRouter
  ]
})
