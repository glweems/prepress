import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	routes: [
		{
			path: '/',
			component: () => import('#/views/Home'),
		},
		{
			path: '/about',
			component: () => import('#/views/About'),
		},
		{
			path: '/products',
			component: () => import('#/views/Products'),
		},
		{
			path: '/product/:sku',
			component: () => import('#/views/Product'),
		},
		{
			path: '/product/:sku/:color',
			component: () => import('#/views/Product'),
			children: [
				{
					path: '',
					meta: { header: "product-header-full", content: "info" },
					components: {
						default: () => import('%/Product/Info')
					}
				},
				{
					path: 'quote',
					meta: { header: "product-header-mini", content: "form" },
					name: "product-form",
					components: {
						default: () => import('%/Calculator/Form')
					}
				}
			],
		},
	]
});
