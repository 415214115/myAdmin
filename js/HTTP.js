import axios from 'axios' //导入axios
import router from "../../router"; //导入路由
import qs from 'qs'
import {ConfigBaseURL} from './configs.js'
import {
  Message,
  MessageBox
} from 'element-ui' //导入element-ui admapi.jiangzimcn.com

// const ConfigBaseURL = 'http://admapi.jiangzimcn.com/api/v1/' //服务器，
// export const ConfigBaseURL = 'http://tgcadmapi.jiangzi.com/api/v1/' // 测试接口
//使用create方法创建axios实例
export const HTTP = axios.create({
  baseURL: ConfigBaseURL,
  method: 'post',
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-type': 'application/x-www-form-urlencoded'
  },
  timeout: 6000 // 请求超时时间
})



// 添加请求拦截器
HTTP.interceptors.request.use(config => {
  let TOKEN = sessionStorage.getItem('ADMIN_TOKEN') ? sessionStorage.getItem('ADMIN_TOKEN') : '';
  // 请求携带token
  if (TOKEN != '') {
    config.headers['Authorization'] = TOKEN
  }
  config.data = qs.stringify(config.data)
  return config
}, (err) => {
  return Promise.reject(err);
})
// 添加响应拦截器
HTTP.interceptors.response.use(
  response => {
    if (response.headers.Authorization) {
      console.log(response.headers.Authorization)
    }
    return response.data
  }, error => {
    //超时处理
    if (error.message.indexOf('timeout') != -1) {
      Message({
        type: 'error',
        message: '请求超时!'
      });
    }
    //错误处理
    errorHandle(error.response.data.code, error.response.data.message)
    return Promise.reject(error.response)
  }
)
//错误处理
const errorHandle = (status, other) => {
  // 状态码判断
  if (status != 401) {
    Message({
      type: 'error',
      message: other
    });
  }

  switch (status) {
    case 401:
      // 401: 未登录状态，跳转登录页
      MessageBox.confirm('未登陆或登陆超时!请重新登录.', '提示', {
        confirmButtonText: '确定',
        type: 'error',
        showClose: false,
        showCancelButton: false,
        closeOnClickModal: false,
        closeOnPressEscape: false
      }).then(() => {
        router.replace('/');
      })
      break;
      // 403 token过期
      // 清除token并跳转登录页
    case 403:
      // tip('登录过期，请重新登录');
      // router.replace('/');
      break;
      // 404请求不存在
    case 404:
      // tip('请求的资源不存在');
      break;
    default:

      console.log(other);
  }
}
