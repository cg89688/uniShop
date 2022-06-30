import App from './App'
import {myRequest} from '@/http/api.js'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$myRequest = myRequest
App.mpType = 'app'
console.info("1")
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  console.info(2)
  app.config.globalProperties.$myRequest = myRequest
  return {
    app
  }
}
// #endif