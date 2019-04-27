// 接口请求函数模块,包含发送请求的函数
//与后台交互
import ajax from "./ajax"
const URL = '/api'
//根据经纬度获取位置详情
export const reqAddress = (longitude, latitude) => ajax(URL + `/position/${latitude},${longitude}`)

//获取食品分类列表
export const reqCategorys = () => ajax(URL + '/index_category')

//根据经纬度获取商铺列表
export const reqShops = (longitude, latitude) => ajax(URL + '/shops',{longitude, latitude})

//发送短信验证
export  const reqCode = (phone) => ajax(URL + '/sendcode',{phone})

//用户名密码登录
export  const reqPwdLogin = ({name, pwd, captcha}) => ajax(URL + '/login_pwd',{name, pwd, captcha}, 'POST')

//手机号验证码登录
export  const reqSmsLogin = ({phone, code}) => ajax(URL + '/login_sms',{phone, code}, 'POST')

// 根据会话获取用户信息
export const reqUser = () => ajax(URL + '/userinfo')

//用户登出
export const reqLogout = () => ajax(URL + '/logout')

