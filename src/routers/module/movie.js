const movieRouter = {
  path: '/movie',
  name: 'movie',
  component: () => import('@/pages/movie')
}

export default movieRouter
