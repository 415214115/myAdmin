import {HTTP} from './http.js'

export const POST = (url, data = {},token) => HTTP({
  url:url,
  method:'post',
  data,
  headers:{'Authorization':token,'Content-type': 'application/x-www-form-urlencoded'}
})

export const GET = (url, data = {}, token) => HTTP({
  url:url,
  method:'get',
  params:data,
  headers:{'Authorization':token,'Content-type': 'application/x-www-form-urlencoded'}
})
// 'X-Requested-With':'XMLHttpRequest',
export const getUserInfo = (url,headers, data = {}) => HTTP({
  url:url,
  method:'get',
  params:data,
  headers:headers
})

