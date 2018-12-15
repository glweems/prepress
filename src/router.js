import Vue from "vue"
import Router from "vue-router"

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
			path: "/",
			name: "home",
			component: () => import("@/views/Home"),
			props: true
		},
		{
			path: "/about",
			name: "about",
			component: () => import("@/views/About"),
			props: true
		},
		{
			path: "/products",
			name: "products",
			component: () => import("@/views/Browse"),
			props: true
		},
		{
			path: "/products/category/:category",
			name: "category",
			components: () => import("@/components/Nav"),
			props: true
		}, {
			path: "/products/id/:id",
			name: "product",
			component: () => import("@/views/Product"),
			props: true
		}, {
			path: "/calculator",
			name: "calculator",
			component: () => import("@/views/Calculator.vue"),
			props: true
		},
	]
})