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
			component: () => import("@/components/Products"),
			props: true,
			children: [{
					path: "",
					component: () => import("@/components/Categories"),
					meta: {
						breadcrums: "home"
					},
					props: true,
				},
				{
					path: ":category",
					name: "style",
					component: () => import("@/components/Styles"),
					props: true,
				},
				{
					path: ":category/:style",
					name: "browse",
					component: () => import("@/components/Browse"),
					props: true,
				},
				{
					path: ":category/:style/:item",
					name: "browse",
					component: () => import("@/components/Browse"),
					props: true,
				}
			]
		}
		// {
		// 	path: "/products/categories/:category",
		// 	name: "category",
		// 	components: () => import("@/components/Category"),
		// 	props: true,
		// },
		// {
		// 	path: "/calculator",
		// 	name: "calculator",
		// 	component: () => import("@/views/Calculator.vue"),
		// 	props: true
		// },
	]
})