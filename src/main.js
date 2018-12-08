import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

Vue.use(ElementUI);

// export default {
// 	mounted() {
// 		WebFontLoader.load({
// 			google: {
// 				families: ['Roboto:100,300,400,500,700,900']
// 			},
// 			active: this.setFontLoaded
// 		})
// 	},
// 	methods: {
// 		setFontLoaded() {
// 			this.$emit('font-loaded')
// 		}
// 	}
// }

Vue.config.productionTip = false

new Vue({
	router,
	render: h => h(App)
}).$mount('#app')