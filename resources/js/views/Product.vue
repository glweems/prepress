<template>
	<div class="product">
		<component :is="header()" :title="product.title" :brand="product.brand" :img="img"/>
		<component :is="content"/>
		<router-view :colors="product.colors" :features="product.features"/>
		<router-view name="form" :colors="product.colors" :features="product.features"/>
		<product-button :onClick="toForm">
			<p class="product-button">GET QUOTE</p>
		</product-button>
	</div>
</template>

<script>
import {
	productImg,
	defaultProductColor,
	getProductApi,
	colorFromRoute
} from "#/helpers";
export default {
	components: {
		"product-header-full": () => import("%/Product/Header"),
		"product-header-mini": () => import("%/Product/HeaderMini"),
		"product-img": () =>
			import(/* webpackChunkName: "image-element" */ "Elements/Img"),
		"product-button": () =>
			import(/* webpackChunkName: "button-elemnt" */ "Elements/Button"),
		"job-form": () =>
			import(/* webpackChunkName: "calculator-form" */ "%/Calculator/Form")
	},
	data() {
		return {
			product: {}
		};
	},
	created() {
		this.fetch();
	},
	methods: {
		fetch() {
			const api = getProductApi(this.$route.params.sku);
			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.setProduct(data);
					prettylog.success("Success: '" + data.sku + "' fetched.");
				})
				.catch(err => {
					prettylog.error("Error: Product Not Fetched");
				});
		},
		setProduct(product) {
			this.product = product;
			prettylog.success("Product: " + product.sku + " set.");
		},
		header() {
			return this.$route.meta.header;
		},
		content() {
			return this.$route.meta.content;
		},
		toForm() {
			this.$router.push({
				name: "product-form"
			});
		}
	},
	computed: {
		img() {
			return productImg(this.product.sku, this.$route.params.color);
		}
	}
};
</script>

<style lang="scss" scoped>
	.product-button {
		width: 100vw;
	}
</style>