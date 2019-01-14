<template>
	<div class="product">
		<product-header
			:title="product.title"
			:brand="product.brand"
			:fabric="product.fabric"
			:upgrade="product.upgrade"
			:color="color"
			:img="img"
		/>
		<product-img v-if="this.$route.meta.img" :img="img" :key="img"></product-img>
		<component :is="content"/>
		<router-view :colors="product.colors" :features="product.features"/>
		<router-view name="form" :colors="product.colors" :features="product.features"/>
		<product-button class="product-button" :pressed="toForm">
			<span>GET QUOTE</span>
		</product-button>
	</div>
</template>

<script>
import {
	productImg,
	defaultProductColor,
	getProductApi,
	colorFromRoute
} from "#/helpers.js";
export default {
	components: {
		"product-header": () => import("%/Product/Header"),
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
					logsuccess("Success: '" + data.sku + "' fetched.");
				})
				.catch(err => {
					// logdanger("Error: Product Not Fetched");
				});
		},
		setProduct(product) {
			this.product = product;
			// prettylog.success("Product: " + product.sku + " set.");
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
			console.clear;
			return productImg(this.product.sku, this.$route.params.color);
		},
		color() {
			console.clear;
			return colorFromRoute(this.product.colors, this.$route.params.color);
		}
	}
};
</script>

<style lang="scss" scoped>
	.content {
		text-align: left;
	}
	img {
		padding: 1em;
		width: 80%;
	}
	.product {
		// text-align: center;
	}
</style>