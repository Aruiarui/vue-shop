// vuex最核心的模块

import Vue from "vue"
import Vuex from 'vuex'
import getters from "./getters"
import state from "./state"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})

