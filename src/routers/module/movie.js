const movieRouter = {
  path: '/movie',
  name: 'movie',
  component: () => import('@/pages/movie'),
  children: [

  ]
}

export default movieRouter
