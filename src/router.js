import Vue from "vue"
import Router from "vue-router"
const HomePage = () => import(/* webpackChunkName: "home-page" */ '@/views/HomePage')
const AboutPage = () => import(/* webpackChunkName: "about-page" */ '@/views/AboutPage')
const ProductsPage = () => import(/* webpackChunkName: "products-page" */ '@/views/ProductsPage')
const ProductPage = () => import(/* webpackChunkName: "products-page" */ '@/components/ProductPage')
const ProductsViewer = () => import(/* webpackChunkName: "products-viewer" */ '@/components/Products/ProductsViewer')
const Browse = () => import(/* webpackChunkName: "browse" */ '@/components/Browse')
const ProductListItem = () => import(/* webpackChunkName: "product-list-item" */ '@/components/ProductListItem')
const ProductQuote = () => import(/* webpackChunkName: "product-quote" */ '@/components/ProductQuote')
const QuotePage = () => import(/* webpackChunkName: "quote-page" */ '@/views/QuotePage');

Vue.use(Router);

export default new Router({
	mode: "history",
	routes: [{
		path: "/",
		name: "home",
		component: HomePage,
		props: true
	},
	{
		path: "/about",
		name: "about",
		component: AboutPage,
		props: true
	},
	{
		path: "/products",
		component: ProductsPage,
		props: true,
		children: [
			{
				path: "",
				component: ProductsViewer,
				meta: {
					breadcrums: "home"
				},
				props: true,
			},
			{
				path: ":category/:style",
				name: "browse",
				component: Browse,
				props: true,
			},
			{
				path: ":category/:style/:sku/:color",
				name: "product-page",
				component: ProductPage,
				props: true,
			},
			{
				path: ":category/:style/:sku/:color/quote",
				name: "product-quote",
				component: ProductQuote,
				props: true,
			},

		]
	}]
})