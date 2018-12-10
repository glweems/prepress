import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
			path: "/",
			// name: "home",
			component: () => import("@/views/Home")
		},
		{
			path: "/about",
			// name: "about",
			component: () => import("@/views/About")
		},
		{
			path: "/products/",
			component: () => import("@/components/Products"),
			props: true,
			children: [{
				path: "/products/all/",
				name: "all",
				component: () => import("@/views/Product/List"),
				props: true,
			}, {
				path: "/products/id/:id/",
				name: "product",
				component: () => import("@/views/Product/Product"),
				props: true,
			}, {
				path: "/quote/",
				name: "calculator",
				component: () => import("@/components/Calculator"),
				props: true,
				children: [{
					path: "/quote/products/",
					name: "quoteAll",
					component: () => import("@/views/Product/List"),
					props: true,
				}, {
					path: "/quote/id/:id/",
					name: "quoteId",
					component: () => import("@/views/Product/Product"),
					props: true,
				}, {
					path: "/quote/price/",
					name: "pricing",
					component: () => import("@/views/Product/Product"),
					props: true,
				}, ]
			}]
		},
	]
});