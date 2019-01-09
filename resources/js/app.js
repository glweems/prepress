import Vue from 'vue'
import Routes from '#/routes'
import Prepress from '#/Prepress'

Vue.config.productionTip = false

const app = new Vue({
    el: '#app',
    router: Routes,
    render: h => h(Prepress),
});
