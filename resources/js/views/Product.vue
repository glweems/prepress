<template>
	<div class="product">
		<h6>Single Product Page</h6>
		<p>{{ product.title }}</p>
		<p>{{ product.brand }}</p>
		<product-img :img="img" :key="img"></product-img>
		<swatches :sku="product.sku" :colors="product.colors"></swatches>
		<features :items="product.features"></features>
	</div>
</template>

<script>
import {
	productImg,
	defaultProductColor,
	getProductApi,
	colorFromRoute
} from "#/helpers";
import image from "%/Image";
import swatches from "%/Swatches/Swatches";
import features from "%/List/List";
import prettylog from "glweems-prettylogs";
export default {
	name: "product",
	components: { features, swatches, "product-img": image },
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
</style>