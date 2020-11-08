import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router'

Vue.config.productionTip = false

// 用于派发/监听事件
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
