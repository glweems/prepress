import Vue from "vue"
import Router from "vue-router"
const HomePage = () => import(/* webpackChunkName: "home-page" */ '@/views/HomePage')
const AboutPage = () => import(/* webpackChunkName: "about-page" */ '@/views/AboutPage')
const ProductsPage = () => import(/* webpackChunkName: "products-page" */ '@/views/ProductsPage')
const PricingTable = () => import(/* webpackChunkName: "pricing-table-page" */ '@/views/PricingTable')
const ProductsViewer = () => import(/* webpackChunkName: "products-viewer" */ '@/components/Products/ProductsViewer')
const Browse = () => import(/* webpackChunkName: "browse" */ '@/components/Browse')
const ProductQuote = () => import(/* webpackChunkName: "product-quote" */ '@/components/Quote/ProductQuote')
const QuoteInfo = () => import(/* webpackChunkName: "product-quote" */ '@/components/Quote/QuoteInfo')
const ProductPage = () => import(/* webpackChunkName: "product-page-home" */ '@/components/Product/ProductPage')
const Content = () => import(/* webpackChunkName: "product-page-home" */ '@/components/Product/Content')
const Calculator = () => import(/* webpackChunkName: "calculator" */ "@/components/Calculator/Calculator")

Vue.use(Router)

export default new Router({
	mode: "history",
	routes: [
		{
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
			path: "/matrix",
			name: "MatrixTable",
			component: PricingTable,
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
					component: ProductPage,
					props: true,
					children: [
						{
							path: '',
							name: 'product-page-home',
							component: Content
						},
						{
							path: 'quote',
							component: ProductQuote,
							children: [
								{
									path: '',
									name: 'product-calculator',
									component: Calculator
								},
								{
									path: 'info',
									name: 'quote-info',
									component: QuoteInfo,
								}
							],
						},

					]
				}
			]
		},
		// {
		// 	path: ":category/:style/:sku/:color",
		// 	name: "product-page",
		// 	component: ProductPage,
		// 	props: true,
		// }
	]
})