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
			name: 'Home',
			component: Home
		},
		{
			path: '/about',
			name: 'About',
			component: About
		},
		{
			path: '/products',
			name: 'Products',
			component: Products
		},
	]
});
