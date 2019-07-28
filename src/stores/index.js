import Vue from 'vue'
import Vuex from 'vuex'

import Movie from './module/movie'
import Cinema from './module/cinema'
import Mine from './module/mine'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Movie,
    Cinema,
    Mine
  }
})
