import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/js/views/Home'
import About from '@/js/views/About'
import Products from '@/js/views/Products'
import Product from '@/js/views/Product'

Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			component: Home
		},
		{
			path: '/about',
			component: About
		},
		{
			path: '/products',
			component: Products
		},
		{
			path: '/product/:sku',
			component: Product
		},
	]
});
