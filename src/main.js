import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'
import Star from "./components/Star/Star.vue";
import {Button} from "mint-ui";

import "./validate";

import store from "./store";

Vue.component('Header', Header)
Vue.component('Star', Star)
Vue.component(Button.name, Button)

new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>',
  router,
  store
})
