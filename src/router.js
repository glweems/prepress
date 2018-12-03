import Vue from "vue";
import Router from "vue-router";
import Products from "@/components/Products"
// import Swatches from "@/views/Product/Swatches"
// import QuoteProduct from "@/views/QuoteProduct";

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
				component: () => import("@/views/Product/Product"),
				name: "product",
				props: true,
			}]
		},

	]
});