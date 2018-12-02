import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import QuoteProduct from "@/views/QuoteProduct"
import Nav from "@/components/Nav"


Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/about',
			name: 'about',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/About.vue')
		},
		{
			path: '/products/',
			name: 'products',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './components/Items.vue'),
		},
		{
			path: '/products/:id',
			name: 'singleProduct',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './views/SingleProduct.vue'),
		},
		{
			path: '/quote/',
			name: 'calculator',
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import( /* webpackChunkName: "about" */ './components/Calculator.vue'),
			children: [{
				// A will be rendered in the second <router-view>
				// when /your-sidebar-url/a is matched
				path: '/:id/',
				components: {
					quoteProduct: QuoteProduct
				}
			}, ]
		},
	]
})