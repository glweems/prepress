import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '#/views/Home'
import About from '#/views/About'
import Products from '#/views/Products'
import Product from '#/views/Product'
import prettylog from 'glweems-prettylogs'

Vue.use(VueRouter, prettylog)

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
