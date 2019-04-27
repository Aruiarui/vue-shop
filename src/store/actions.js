// 间接更新状态数据的方法的对象,发请求的异步代码
import {reqAddress, reqCategorys, reqShops, reqUser, reqLogout} from "../api";
import {RECEIVE_ADDRESS, RECEIVE_CATEGORYS, RECEIVE_SHOPS, RECEIVE_USER, RESET_USER} from './mutation-types'

export default {
// action方法的参数commit，state(可能会用到)
//  根据经纬度获取地址
  async getAddress({commit, state}) {
    const {longitude, latitude } = state
    const result = await reqAddress(longitude, latitude)
    if(result.code===0) {
      const address = result.data
      commit(RECEIVE_ADDRESS, address)
    }
  },

  //  获取食品分类列表
  async getCategorys({commit}) {
    const result = await reqCategorys()
    if(result.code===0) {
      const categorys = result.data
      commit(RECEIVE_CATEGORYS, categorys)
    }
  },

  //  根据经纬度获取店铺列表
  async getShops({commit, state}) {
    const {longitude, latitude} = state
    const result = await reqShops(longitude, latitude)
    if(result.code===0) {
      const shops = result.data
      commit(RECEIVE_SHOPS, shops)
    }
  },

  async getUser({commit}) {
    const result = await reqUser()
    if(result.code===0) {
      const user = result.data
      commit(RECEIVE_USER, user)
    }
  },

  async getLogout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
}
