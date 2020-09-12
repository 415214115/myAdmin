import {http} from './http.js'
export const request = {
	// get请求
	get:(url, data = {}) => HTTP({
	  url:url,
	  method:'get',
	  params:data,
	  headers:{'Content-type': 'application/x-www-form-urlencoded'}
	}),
	// post请求，字符串
	postForm:(url, data = {}) => HTTP({
	  url:url,
	  method:'post',
	  data,
	  headers:{'Content-type': 'application/x-www-form-urlencoded'}
	}),
	// post请求，json
	postJson:(url, data = {}) => HTTP({
	  url:url,
	  method:'post',
	  data,
	  headers:{'Content-type': 'application/json; charset=utf-8'}
	}),
	// post请求，上传文件
	postUploading:(url, data = {}) => HTTP({
	  url:url,
	  method:'post',
	  data,
	  headers:{'Content-type': 'multipart/form-data'},
	  processData: false,
	  contentType: false
	}),
	// get请求，下载文件
	getFile:(url, data = {}) => HTTP({
	  url:url,
	  method:'get',
	  params:data,
	  headers:{'Content-type': 'application/x-www-form-urlencoded'},
	  responseType: 'blob'
	})
}
/**
 * get请求文件下载实例
 */

// ExportFile(type, DATA).then((res) => {
//     const blob = res.data;
//     const reader = new FileReader();
//     reader.readAsDataURL(blob);
//     reader.onload = (e) => {
//       const a = document.createElement('a');
//       a.download = Date.parse(new Date()) + '.xlsx';
//       // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
//       a.href = e.target.result;
//       document.body.appendChild(a);
//       a.click();
//       document.body.removeChild(a);
//     };
//   }).catch(err => {
//     Message.error('下载失败！');
//   })
