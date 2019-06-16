import Vue from 'vue'
import App from './App.vue'

import store from './vuex/store'
import router from './router/router'
import i18n from './i18n/i18n'
import 'font-awesome/css/font-awesome.min.css'

import './plugins/element'
import './plugins/custom'
import './mock/index'

Vue.config.productionTip = false

new Vue({
  router,
  i18n,
  store,
  data: {
    eventHub: new Vue()
  },
  el: '#app',
  render: h => h(App)
}).$mount('#app');