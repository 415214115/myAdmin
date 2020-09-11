export const imgUrl = 'http://gongchang.jiangzi.com/'
export const API = {
  LOGIN:'login',//系统登录
  USERINFO:'admins/info',//获取用户信息
  LOGIN_UOT:'logout',//退出登录
  UPLOAD:'upload',//图片上传
  //任务模板
  TASK_TEMPLATE_ITEM:'template/list',//任务模板列表
  DELETETEMPLATE:'template/delete',//删除模板
  GETTEMPLATEDETAILS:'template',//获取模板详情
  TASKDEMANDLIST:'template/consumers',//获取模板使用方列表
  ADDTEMPLATE:'template/create',//新建任务模板
  UPDATETEMPLATE:'template/update',//修改任务模板
  //用户管理-需求方
  GETDEMANDLIST:'consumers',//获取需求方列表
  ADD_DEMAND:'consumers' ,//新增需求方
  EDIT_DEMAND:'consumers/edit' ,//修改需求方
  DELETE_DEMAND:'consumers/delete',//删除需求方
  RECHARGE:'consumer/recharge',//账户充值
  //用户管理-服务方
  SERVERS_LIST:'users_org',//获取服务方列表
  SERVERS_DETAILS:'users_org',//服务方详情
  SERVERS_VERIFY:'users/verify',//服务方认证
  AUTHENTICATION:'users/certificate/verify',//资料认证--认证
  AUTHENTICATION_LIST:'users/certificates',//资料认证--列表
  //财务管理
  FINANCE_LIST:'finance/withdrew',//提现列表
  AUDIT:'finance/withdrewReview',//审核
  FEE_LIST:'finance/rewards',//任务酬金列表
  WITHDRAWAKS:'finance/confirmPay',//付款
  INVOICEREVIEW:'finance/invoiceReview',//发票审核
  BILL_LIST:'settlement/bill',//需求方账单列表
  BILLDETAIL:'settlement/billDetail',//账单明细
  GETINVOICES:'settlement/invoices',//发票列表
  INVOICEDETEIL:'settlement/invoice/',//获取发票详情
  POSTINVOICE:'settlement/postInvoice',//确认开票
  WITHDREWDETAIL:'finance/withdrewDetail',//获取提现明细

  billDetailExport:'settlement/billDetailExport',//账单明细导出
  withdrewDetailExport:'finance/withdrewDetailExport',//提现明细导出
  providerBillDetailExport:'provider/billDetailExport',//服务方对账单明细导出
  invoicesExport:'provider/invoicesExport',//服务方发票列表导出
  sdtlExport:'provider/wallet/dtlExport',//服务方钱包明细导出
  ddtlExport:'consumer/wallet/dtlExport',//需求方钱包明细导出




  GETWALLET:'consumer/wallet' ,//需求方钱包列表
  WALLETDTL:'consumer/wallet/dtl'  ,//获取钱包明细
  GETPROVIDERWALLET:'provider/wallet',//服务方钱包列表
  PROVIDERWALLETDTL:'provider/wallet/dtl',//服务方钱包明细
  PROVIDERINVOICES:'provider/invoices',//服务方发票列表
  PROVIDERDETAIL:'provider/billDetail',//服务方对账单明细
  CACCOUNTSTAT:'consumer/accountStat',//需求方钱包概览
  PACCOUNTSTAT:'provider/accountStat',//服务方钱包概览
  //任务管理
  TASK_LIST:'tasks',//任务列表
  TASK_DELETE:'task/delete',//删除任务
  TASK_DETAILE:'task',//任务详情
  TASK_WORDS:'task/words',//任务词条
  WORD_PAGE:'bags',//词包列表
  WORD_DETAILS:'words',//词包列表详情
  //内容管理
  CONTENT_LIST:'contents',//内容列表
  CONTENT_DELETE:'content/delete',//删除内容
  IMG_DETAILS:'content/show',//获取内容详情
  // PUBLISH:'',//获取发任务详情
  //管理员
  ADMIN_LIST:'admins',//管理员列表
  ADMIN_DELETE:'admins/delete',//删除管理员
  ADMIN_ADD:'admins',//新增管理员
  ADMIN_GROUPS:'groups',//权限组列表
  ADMIN_EDIT:'admins/update',//编辑管理员
  JURISDICTION_EDIT:'groups/update',//权限组编辑
  JURISDICTION_ADD:'groups',//权限组新增
  JURISDICTION_DELETE:'groups/delete',//权限组删除
  GROUPS:'groups/',//获取单个权限组——编辑权限组


  JURISDICTION_PURVIEW:'purview',//权限组新增列表
  LOG_LIST:'logs',//操作日志
  MODULES_LIST:'modules',//操作模块
  //通知管理
  INFORM_LIST:'notify',//通知列表
  INFORM_DELETE:'notify/delete',//删除通知
  INFORM_CONT:'notify/',//获取修改通知数据
  INFORM_UPDETE:'notify/update',//修改通知
  //分类管理
  CLASSIFY_LIST:'categories',//获取分类列表
  CLASSIFY_MSG:'category/show',//获取分类信息
  CLASSIFY_SAVE:'category/store',//保存分类
  CLASSIFY_DELETE:'category/delete'//删除分类
}
