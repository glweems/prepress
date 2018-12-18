import Vue from "vue"
import ElementUI from "element-ui"
import '@/sass/main.sass'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import "element-ui/lib/theme-chalk/index.css"
import App from "./App.vue"
import router from "./router"
import PageHeader from "@/components/PageHeader"
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

Vue.use(ElementUI, VueGlide, PageHeader)

Vue.config.productionTip = false

new Vue({
  router,
  PageHeader,
  render: h => h(App)
}).$mount("#app")