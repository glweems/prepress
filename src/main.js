import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Nav from './components/Nav'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

new Vue({
  router,
  render: h => h(Nav)
}).$mount('#nav')


