import Vue from "vue"

import Router from "vue-router"

const HomePage = () => import(/* webpackChunkName: "home-page" */ '@/views/HomePage')

const AboutPage = () => import(/* webpackChunkName: "about-page" */ '@/views/AboutPage')

const ProductsPage = () => import(/* webpackChunkName: "products-page" */ '@/views/ProductsPage')

const ProductsViewer = () => import(/* webpackChunkName: "products-viewer" */ '@/components/Products/ProductsViewer')

const Browse = () => import(/* webpackChunkName: "browse" */ '@/components/Browse')

const ProductPage = () => import(/* webpackChunkName: "product-page-home" */ '@/components/Product/ProductPage')

const Content = () => import(/* webpackChunkName: "product-page-home" */ '@/components/Product/Content')

const Quote = () => import(/* webpackChunkName: "quote" */ '@/components/Quote/Quote')

const QuoteForm = () => import(/* webpackChunkName: "quote-form" */ "@/components/Quote/Form")

const QuoteCalculator = () => import(/* webpackChunkName: "quote-calculator" */ '@/components/Quote/Calculator')

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
							component: Quote,
							children: [
								{
									path: '',
									name: 'quote-form',
									component: QuoteForm
								},
								{
									path: 'qty/:qty/front/:front/back/:back',
									name: 'quote-calculator',
									component: QuoteCalculator,
								}
							],
						},

					]
				}
			]
		},
	]
})