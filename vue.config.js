module.exports = {
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 9528,
    https: false,
    hotOnly: false,
    proxy: {
      '/ajax': {
        target: 'http://m.maoyan.com',
        changeOrigin: true
      }
    }
  }
}
