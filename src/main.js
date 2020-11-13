import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './scss/light.scss'
import './scss/dark.scss'
import './assets/main.css'
import './utills/ripple'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
