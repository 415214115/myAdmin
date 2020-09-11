// 文件导出
import axios from 'axios' //导入axios
import router from "../../router"; //导入路由
import {
  API
} from "./api.js"
import {
  ConfigBaseURL
} from "./configs.js"
import {
  Message
} from 'element-ui'
const url = {
  'bill': API.billDetailExport,//账单明细
  'withdraw': API.withdrewDetailExport,//提现明细
  'account': API.providerBillDetailExport,//对账明细
  'sinvoice':API.invoicesExport,//服务方发票列表
  'saccount':API.sdtlExport,//服务方钱包明细
  'ddtlExport':API.ddtlExport,//需求方钱包明细
}
const ExportFile = (types, data) => {
  let promise = new Promise((resolve, reject) => {
    axios({
      url: ConfigBaseURL + url[`${types}`],
      params: data,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Content-type': 'application/x-www-form-urlencoded',
        'Authorization': sessionStorage.getItem('ADMIN_TOKEN')
      },
      responseType: 'blob',
      method: 'get'
    }).then(res => {
      return resolve(res)
    }).catch((err) => {
      return reject(err)
    })
  })
  return promise
}
export const exports = (type, DATA) =>{
  ExportFile(type, DATA).then((res) => {
    const blob = res.data;
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    reader.onload = (e) => {
      const a = document.createElement('a');
      a.download = Date.parse(new Date()) + '.xlsx';
      // 后端设置的文件名称在res.headers的 "content-disposition": "form-data; name=\"attachment\"; filename=\"20181211191944.zip\"",
      a.href = e.target.result;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    };
  }).catch(err => {
    Message.error('下载失败！');
  })
}
