import Vue from 'vue'
import VueRouter from 'vue-router'
// import { buttonMixin } from 'mixins'


// Vue.mixin(buttonMixin)
Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			component: () => import(/* webpackChunkName: "home-page" */'#/views/Home'),
		},
		{
			path: '/about',
			component: () => import(/* webpackChunkName: "about-page" */'#/views/About'),
		},
		{
			path: '/products',
			component: () => import(/* webpackChunkName: "products-page" */'#/views/Products'),
		},
		{
			path: '/product/:sku',
			component: () => import(/* webpackChunkName: "product-view" */'#/views/Product'),
		},
		{
			path: '/product/:sku/:color',
			component: () => import(/* webpackChunkName: "product-page-color" */'#/views/Product'),
			children: [
				{
					path: '',
					meta: { header: "product-header-full", content: "info", img: true },
					components: {
						default: () => import(/* webpackChunkName: "product-info" */'%/Product/Info')
					}
				},
				{
					path: 'quote',
					meta: { header: "product-header-mini", content: "form", img: false },
					name: "product-form",
					components: {
						default: () => import(/* webpackChunkName: "product-form" */'%/Calculator/Form')
					}
				}
			],
		},
	]
});
