import Vue from "vue"
import Router from "vue-router"
// import Layout from "@/components/Layout"
// import Filter from "@/components/Filter"
// import Nav from "@/components/Nav"

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
			component: () => import("@/components/Products"),
			props: true
		}, {
			path: "/product",
			name: "product",
			component: () => import("@/views/Product/Product"),
			props: true
		}, {
			path: "/calculator",
			name: "calculator",
			component: () => import("@/components/Calculator"),
			props: true
		},
	]
})