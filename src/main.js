// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import './assets/css/appmain.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import ElementUi from 'element-ui'
import axios from 'axios'
import base from './base'
import echarts from 'echarts'
import cqelement from './components/base/index'
// import {print, print1} from '../static/LodopFuncs.js'
// import {print, print1} from './assets/js/LodopFuncs.js'
// Vue.config.debug = true
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.$echarts = echarts
// Vue.prototype.print = print
// Vue.prototype.print1 = print1
Vue.use(Vuex)
Vue.use(ElementUi)
Vue.use(base)
Vue.use(cqelement)
axios.defaults.withCredentials = true
// axios.defaults.baseURL = 'http://192.168.100.202:8023/hpserver'
// axios.defaults.baseURL = 'http://172.16.35.150:7100'
axios.defaults.baseURL = '/api'
// axios.defaults.baseURL = 'http://localhost:7100'
// axios.defaults.baseURL = 'http://172.16.35.220:8999/ims'
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  var rpdata = response.data
  if (rpdata.Data) {
    if (rpdata.Data.statusCode === 8400) {
      window.GlobalVue.$router.push({name: 'LoginError'})
      return response
    }
  }
  // if (response.data.statusCode === 8401) {
  //   let errorList = response.data.data
  //   for (let i = 0; i < errorList.length; i++) {
  //     window.GlobalVue.$message({
  //       message: errorList[i].text,
  //       type: 'error'
  //     })
  //   }
  // }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})

Vue.directive('enterToNext', {
  inserted: function (el) {
    console.log('enterToNext...')
    let inputs = el.querySelectorAll('input')
    console.log(inputs)
    // 绑定回写事件
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].setAttribute('keyFocusIndex', i)
      inputs[i].addEventListener('keyup', (ev) => {
        if (ev.keyCode === 13) {
          let targetTo = ev.srcElement.getAttribute('keyFocusTo')
          if (targetTo) {
            this.$refs[targetTo].$el.focus()
          } else {
            var attrIndex = ev.srcElement.getAttribute('keyFocusIndex')
            var ctlI = parseInt(attrIndex)
            if (ctlI < inputs.length - 1) {
              inputs[ctlI + 1].focus()
            }
          }
        }
      })
    }
  }
})

/* eslint-disable no-new */
window.GlobalVue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
