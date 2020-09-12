import axios from 'axios'
import router from "../router"; //导入路由
import qs from 'qs'
import {
	MessageBox,
	Message
} from 'element-ui'

// create an axios instance
export const http = axios.create({
	baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
	headers: {
		'X-Requested-With': 'XMLHttpRequest'
	},
	timeout: 5000 // 设置超时时间
})
/**
 * 请求拦截器，
 */
http.interceptors.request.use(config => {
	const token = sessionStorage.getItem('token')
	// 请求携带token
	if (token != '') {
		config.headers['token'] = token
	}
	config.data = qs.stringify(config.data)
	return config
}, error => {
	// do something with request error
	console.log(error) // for debug
	return Promise.reject(error)
})

/**
 * 返回拦截器，
 */
http.interceptors.response.use(response => {
	const res = response.data
	if (res.code !== 20000) {
		Message({
			message: res.message || 'Error',
			type: 'error',
			duration: 5 * 1000
		})
		return Promise.reject(new Error(res.message || 'Error'))
	} else {
		return res
	}
}, error => {
	//超时处理
	if (error.message.indexOf('timeout') != -1) {
		Message.error('请求超时!')
	}
	console.log('err' + error) // for debug
	errorHandle(error.response.data.code, error.response.data.message)
	return Promise.reject(error.response)
})

//错误处理
const errorHandle = (status, other) => {
	// 状态码判断
	/**
	 * @param {Object} status
	 * 状态码和后台约定，进行相应操作
	 */
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
		case 403:
			Message.error(other)
			break;
		case 404:
			Message.error(other)
			break;
		default:
			Message.error(other)
	}
}
