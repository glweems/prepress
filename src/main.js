Vue.config.productionTip = false

import Vue from "vue"
import ElementUI from "element-ui"
import App from "./App.vue"
import router from "./router"
import Breadcrums from "@/components/Utilities/Breadcrums"
import Breadcrum from "@/components/Utilities/Breadcrum"
import PageHeader from "@/components/PageHeader"
import Swatches from "@/components/Swatches"
import Swatch from "@/components/Swatch"
import Scroller from "@/components/Utilities/Scroller"
import ProductList from "@/components/ProductList"
import ProductListItem from "@/components/ProductListItem"
import Calculator from "@/components/Calculator/Calculator";
import Features from "@/components/Features";
import '@/sass/main.sass'
import '@fortawesome/fontawesome-free/css/all.css'
import 'animate.css'
import "element-ui/lib/theme-chalk/index.css"

Vue.component('breadcrums', Breadcrums)
Vue.component('breadcrum', Breadcrum)
Vue.component('page-header', PageHeader)
Vue.component('swatches', Swatches)
Vue.component('swatch', Swatch)
Vue.component('scroller', Scroller)
Vue.component('product-list', ProductList)
Vue.component('product-list-item', ProductListItem)
Vue.component('calculator', Calculator)
Vue.component('features', Features)

Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount("#app")