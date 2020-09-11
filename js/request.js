import {
  HTTP
} from './HTTP.js'
import {
  API
} from './api.js'
//接口方法列表
//登录
export const LOGIN = (data) => HTTP({
  url: API.LOGIN,
  method: 'POST',
  data: data
})
//获取用户信息
export const USERINFO = (data) => HTTP({
  url: API.USERINFO,
  method: 'GET',
  params: data
})
//退出登录UPLOAD
export const LOGIN_UOT = (data) => HTTP({
  url: API.LOGIN_UOT,
  method: 'POST',
  data: data
})
//图片上传
export const UPLOAD = (data) => HTTP({
  url: API.UPLOAD,
  method: 'POST',
  data: data
})
//用户管理 start
//获取需求方列表
export const GETDEMANDITEM = (data) => HTTP({
  url: API.GETDEMANDLIST,
  method: 'GET',
  params: data
})
//新增需求方
export const ADD_DEMAND = (data) => HTTP({
  url: API.ADD_DEMAND,
  method: 'POST',
  data: data
})
//修改需求方
export const EDIT_DEMAND = (data) => HTTP({
  url: API.EDIT_DEMAND,
  method: 'POST',
  data: data
})
//删除需求方
export const DELETE_DEMAND = (data) => HTTP({
  url: API.DELETE_DEMAND,
  method: 'POST',
  data: data
})
//需求方充值
export const RECHARGE = (data) => HTTP({
  url: API.RECHARGE,
  method: 'POST',
  data: data
})
//服务方列表
export const SERVERS_LIST = (data) => HTTP({
  url: API.SERVERS_LIST,
  method: 'GET',
  params: data
})
//服务方详情
export const SERVERS_DETAILS = (data) => HTTP({
  url: API.SERVERS_DETAILS + '/' + data,
  method: 'GET'
})
//服务方认证
export const SERVERS_VERIFY = (data) => HTTP({
  url: API.SERVERS_VERIFY,
  method: 'POST',
  data: data
})
//资料认证--认证
export const AUTHENTICATION = (data) => HTTP({
  url: API.AUTHENTICATION,
  method: 'POST',
  data: data
})
//资料认证--列表
export const AUTHENTICATION_LIST = (data) => HTTP({
  url: API.AUTHENTICATION_LIST,
  method: 'GET',
  params: data
})
//用户管理 end

//任务管理 start
//任务模板-获取任务模板列表
export const GETTEMPLATEITEM = (data) => HTTP({
  url: API.TASK_TEMPLATE_ITEM,
  method: 'GET',
  params: data
})
//任务模板-删除模板
export const DELETETEMPLATE = (data) => HTTP({
  url: API.DELETETEMPLATE,
  method: 'POST',
  data: data
})
//任务模板-获取模板详情
export const TEMPLATEDETAILS = (data) => HTTP({
  url: API.GETTEMPLATEDETAILS + '/' + data,
  method: 'GET',
})
//获取模板使用方列表
export const TASKDEMANDLIST = (data) => HTTP({
  url: API.TASKDEMANDLIST,
  method: 'GET',
  params: data
})
//任务模板-新增任务模板
export const ADDTASKTEMPLATE = (data) => HTTP({
  url: API.ADDTEMPLATE,
  method: 'POST',
  data: data
})
//任务模板-修改任务模板
export const UPDATETASKTEMPLATE = (data) => HTTP({
  url: API.UPDATETEMPLATE,
  method: 'POST',
  data: data
})
//词包列表
export const WORD_PAGE = (data) => HTTP({
  url: API.WORD_PAGE,
  method: 'GET',
  params: data
})
//词包列表详情
export const WORD_DETAILS = (data) => HTTP({
  url: API.WORD_DETAILS,
  method: 'GET',
  params: data
})
//任务管理 end
//财务管理 start
//提现记录
export const FINANCE_LIST = (data) => HTTP({
  url: API.FINANCE_LIST,
  method: 'GET',
  params: data
})
//发票审核
export const INVOICEREVIEW = (data) => HTTP({
  url: API.INVOICEREVIEW,
  method: 'POST',
  data: data
})
//提现审核
export const AUDIT = (data) => HTTP({
  url: API.AUDIT,
  method: 'POST',
  data: data
})
//提现付款
export const WITHDRAWAKS = (data) => HTTP({
  url: API.WITHDRAWAKS,
  method: 'POST',
  data: data
})
//任务酬金列表
export const FEE_LIST = (data) => HTTP({
  url: API.FEE_LIST,
  method: 'GET',
  params: data
})
//需求方账单列表
export const BILL_LIST = (data) => HTTP({
  url: API.BILL_LIST,
  method: 'GET',
  params: data
})
//需求方账单明细
export const BILLDETAIL = (data) => HTTP({
  url: API.BILLDETAIL,
  method: 'GET',
  params: data
})
//需求方发票列表
export const GETINVOICES = (data) => HTTP({
  url: API.GETINVOICES,
  method: 'GET',
  params: data
})
//需求方发票详情
export const INVOICEDETEIL = (data) => HTTP({
  url: API.INVOICEDETEIL + data,
  method: 'GET'
})
//确认开票
export const POSTINVOICE = (data) => HTTP({
  url: API.POSTINVOICE,
  method: 'POST',
  data: data
})
//提现明细
export const WITHDREWDETAIL = (data) => HTTP({
  url: API.WITHDREWDETAIL,
  method: 'GET',
  params: data
})
//需求方钱包列表
export const GETWALLET = (data) => HTTP({
  url: API.GETWALLET,
  method: 'GET',
  params: data
})
//获取钱包明细
export const WALLETDTL = (data) => HTTP({
  url: API.WALLETDTL,
  method: 'GET',
  params: data
})
//服务方钱包列表
export const GETPROVIDERWALLET = (data) => HTTP({
  url: API.GETPROVIDERWALLET,
  method: 'GET',
  params: data
})
//服务方钱包明细
export const PROVIDERWALLETDTL = (data) => HTTP({
  url: API.PROVIDERWALLETDTL,
  method: 'GET',
  params: data
})
//服务方发票列表
export const PROVIDERINVOICES = (data) => HTTP({
  url: API.PROVIDERINVOICES,
  method: 'GET',
  params: data
})
//服务方对账单明细
export const PROVIDERDETAIL = (data) => HTTP({
  url: API.PROVIDERDETAIL,
  method: 'GET',
  params: data
})
//需求方钱包概览
export const CACCOUNTSTAT = (data) => HTTP({
  url: API.CACCOUNTSTAT,
  method: 'GET',
  params: data
})
//服务方钱包概览
export const PACCOUNTSTAT = (data) => HTTP({
  url: API.PACCOUNTSTAT,
  method: 'GET',
  params: data
})
//财务管理 end
//任务管理 start
//任务列表
export const TASK_LIST = (data) => HTTP({
  url: API.TASK_LIST,
  method: 'GET',
  params: data
})

//删除任务
export const TASK_DELETE = (data) => HTTP({
  url: API.TASK_DELETE,
  method: 'POST',
  data: data
})
//任务详情
export const TASK_DETAILE = (data) => HTTP({
  url: API.TASK_DETAILE + '/' + data,
  method: 'GET'
})
//词条内容
export const TASK_WORDS = (data) => HTTP({
  url: API.TASK_WORDS,
  method: 'GET',
  params: data
})
//任务管理 end
//内容管理 start
//内容列表
export const CONTENT_LIST = (data) => HTTP({
  url: API.CONTENT_LIST,
  method: 'GET',
  params: data
})
//删除内容
export const CONTENT_DELETE = (data) => HTTP({
  url: API.CONTENT_DELETE,
  method: 'POST',
  data: data
})
//内容详情
export const IMG_DETAILS = (data) => HTTP({
  url: API.IMG_DETAILS + '/' + data,
  method: 'GET'
})
//内容管理 end
//管理员 start
//管理员列表
export const ADMIN_LIST = (data) => HTTP({
  url: API.ADMIN_LIST,
  method: 'GET',
  params: data
})
//删除管理员
export const ADMIN_DELETE = (data) => HTTP({
  url: API.ADMIN_DELETE,
  method: 'POST',
  data: data
})
//新增管理员
export const ADMIN_ADD = (data) => HTTP({
  url: API.ADMIN_ADD,
  method: 'POST',
  data: data
})
//权限组列表
export const ADMIN_GROUPS = (data) => HTTP({
  url: API.ADMIN_GROUPS,
  method: 'GET',
  params: data
})
//编辑管理员
export const ADMIN_EDIT = (data) => HTTP({
  url: API.ADMIN_EDIT,
  method: 'POST',
  data: data
})
//获取单个权限——编辑权限获取数据
export const GROUPS = (data) => HTTP({
  url: API.GROUPS + data,
  method: 'GET'
})
//权限组编辑
export const JURISDICTION_EDIT = (data) => HTTP({
  url: API.JURISDICTION_EDIT,
  method: 'POST',
  data: data
})
//权限组新增
export const JURISDICTION_ADD = (data) => HTTP({
  url: API.JURISDICTION_ADD,
  method: 'POST',
  data: data
})
//权限组删除
export const JURISDICTION_DELETE = (data) => HTTP({
  url: API.JURISDICTION_DELETE,
  method: 'POST',
  data: data
})
//新增权限组列表
export const JURISDICTION_PURVIEW = (data) => HTTP({
  url: API.JURISDICTION_PURVIEW,
  method: 'GET',
  params: data
})
// LOG_LIST:'logs',//操作日志
//   MODULES_LIST:'modules',//操作模块
//操作日志
export const LOG_LIST = (data) => HTTP({
  url: API.LOG_LIST,
  method: 'GET',
  params: data
})
//操作模块
export const MODULES_LIST = (data) => HTTP({
  url: API.MODULES_LIST,
  method: 'GET',
  params: data
})
//管理员 end
//通知 start
//通知列表
export const INFORM_LIST = (data) => HTTP({
  url: API.INFORM_LIST,
  method: 'GET',
  params: data
})
//删除通知
export const INFORM_DELETE = (data) => HTTP({
  url: API.INFORM_DELETE,
  method: 'POST',
  data: data
})
//发布通知
export const INFORM_ISSUE = (data) => HTTP({
  url: API.INFORM_LIST,
  method: 'POST',
  data: data
})
//获取修改通知数据
export const INFORM_CONT = (data) => HTTP({
  url: API.INFORM_CONT + data,
  method: 'GET'
})
//修改通知
export const INFORM_UPDETE = (data) => HTTP({
  url: API.INFORM_UPDETE,
  method: 'POST',
  data: data
})
//通知 end
//分类管理 start
//分类列表
export const CLASSIFY_LIST = (data) => HTTP({
  url: API.CLASSIFY_LIST,
  method: 'GET',
  params: data
})
//获取分类信息
export const CLASSIFY_MSG = (data) => HTTP({
  url: API.CLASSIFY_MSG,
  method: 'GET',
  params: data
})
//保存分类
export const CLASSIFY_SAVE = (data) => HTTP({
  url: API.CLASSIFY_SAVE,
  method: 'POST',
  data: data
})
//删除分类
export const CLASSIFY_DELETE = (data) => HTTP({
  url: API.CLASSIFY_DELETE,
  method: 'POST',
  data: data
})
//分类管理 end
