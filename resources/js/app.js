Vue.config.productionTip = false
import Vue from 'vue'
import Routes from '#/routes'
import Prepress from '#/Prepress'

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(Prepress),
});
