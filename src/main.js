Vue.config.productionTip = false

import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import '@/sass/main.sass'
import 'animate.css'
const FontAwesome = () => import(/* webpackChunkName: "font-awesome" */ '@fortawesome/fontawesome-free/css/all.css');
import Element from 'element-ui'
import "element-ui/lib/theme-chalk/index.css"
Vue.use(Element)
Vue.use(FontAwesome)

new Vue({
  router,
  render: h => h(App)
}).$mount("#app")