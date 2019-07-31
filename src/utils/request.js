import axios from 'axios'
import qs from 'qs'

// create an axios instance
const service = axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    if (config.headers['Content-Type'] === 'application/json') {
      config.data = JSON.stringify(config.data)
    }
    if (config.headers['Content-Type'] === 'multipart/form-data') {
      return config
    }
    if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
      if (typeof (config.data) !== 'string') {
        config.data = qs.stringify(config.data)
      }
    }
    // config.headers['token'] = 'fsdfsdfsd'
    // console.log(config)
    return config
  },
  error => {
    // Do something with request error
    console.log(error) // for debug
    Promise.reject(error)
  }
)

export default service
