// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import axios from "axios"
import vueAxios from "vue-axios"
import vuex from "vuex"
import elementUI from "element-ui"
import 'element-ui/lib/theme-default/index.css'
require('../static/css/reset.css')
Vue.config.productionTip = false
Vue.use(vueAxios,axios)
Vue.use(vuex)
Vue.use(elementUI)
var store=new vuex.Store({
  state:{
   data:[],
  },
  mutations:{
    ajax(state,data){
       state.data=data;
    },
  },
  actions:{
   click(context,data){
      context.commit('ajax',data)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
