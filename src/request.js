const axios = require("axios")

const service = axios.create({
    baseURL: 'https://www.fastmock.site/mock/79366917e4ba9130420b04996b8c3a73/mock',
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 30000 // request timeout
  })

  // request interceptor
service.interceptors.request.use(
    config => {
      // do something before request is sent
      return config
    },
    error => {
      console.log(error) // for debug
      return Promise.reject(error)
    }
  )
  
  // response interceptor
  service.interceptors.response.use(
  
    response => {
      const res = response.data
      if(response.status!==200){
        
      }
      if(res.code !==0){
       
      }
  
      return res.data
    },
    err => {
      if (err && err.response) {
          switch (err.response.status) {
            case 400:
              err.message = 'status:400，请求错误'
              break
      
            case 401:
              err.message = 'status:401，未授权，请登录'
              break
      
            case 403:
              err.message = 'status:403，拒绝访问 '
              break
      
            case 404:
              err.message = `status:404，接口不存在，url: ${err.response.config.url}`
              break
      
            case 408:
              err.message = 'status:408，请求超时'
              break
      
            case 500:
              err.message = 'status:500，服务器内部错误'
              break
      
            case 501:
              err.message = 'status:501，服务未实现'
              break
      
            case 502:
              err.message = 'status:502，网关错误'
              break
      
            case 503:
              err.message = 'status:503，服务不可用'
              break
      
            case 504:
              err.message = 'status:504，网关超时'
              break
      
            case 505:
              err.message = 'status:505，HTTP版本不受支持'
              break
      
            default:
              err.message = '服务器错误！'
          }
      
      }

      return Promise.reject(err)
    }
  )
  

  module.exports = service