import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',//为了消除路径后的#号
  routes
})
