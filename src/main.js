import devtools from '@vue/devtools'
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Nav from './components/Nav'
// if (process.env.NODE_ENV === 'development') {
// 	devtools.connect('192.168.1.43', '8098')
// }
Vue.config.productionTip = true
new Vue({
	router,
	render: h => h(App)
}).$mount('#app')

new Vue({
	router,
	render: h => h(Nav)
}).$mount('#nav')