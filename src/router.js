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
		component: () => import("@/views/Products"),
		props: true,
		children: [{
			path: "",
			component: () => import("@/components/Products/ProductsViewer"),
			meta: {
				breadcrums: "home"
			},
			props: true,
		},
		{
			path: ":style",
			name: "browse",
			component: () => import("@/components/Browse"),
			props: true,
		},
		{
			path: ":category/:style",
			name: "browse",
			component: () => import("@/components/Browse"),
			props: true,
		},
		{
			path: ":category/:style/:sku",
			name: "product",
			component: () => import("@/components/ProductPage"),
			props: true,
		}
		]
	}, {
		path: "/quote",
		component: () => import("@/views/Quote"),
		props: true,
		children: [{
			path: "",
			name: "quote",
			component: () => import("@/components/ProductItem"),
			props: true
		}, {
			path: ":sku/:color",
			name: "quote-item",
			component: () => import("@/components/ProductItem"),
			props: true
		}],
	}
	]
})