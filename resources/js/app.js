require('./bootstrap')
import Vue from 'vue'
import Routes from '@/js/routes.js'
import App from '@/js/App.vue'

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});
