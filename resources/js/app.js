require('./bootstrap')
import Vue from 'vue'
import Routes from '#/routes'
import App from '#/App.vue'

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(App),
});
