<template>
	<div>
		<p>{{ product.title }}</p>
		<img :src="img">
		<swatches :colors="product.colors"/>
		<div class="container">
			<h4 class="subtitle">Description</h4>
			<p>{{ product.description }}</p>
			<features :items="product.features" title="Features" subtitle="Subtitle"/>
		</div>
	</div>
</template>

<script>
import helpers from "#/helpers";
import prettylog from "glweems-prettylogs";
export default {
	components: {
		features: () =>
			import(/* webpackChunkName: "product-features" */ "%/List/List"),
		swatches: () =>
			import(/* webpackChunkName: "product-swatches" */ "%/Swatches/Swatches")
	},
	created() {
		this.fetch();
	},
	data() {
		return {
			product: {}
		};
	},
	methods: {
		fetch() {
			fetch(helpers.getProductApi(this.$route.params.sku))
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.product = data;
					prettylog.success("Success: '" + data.sku + "' fetched.");
				})
				.catch(err => {
					prettylog.danger("Error: Product Not Fetched");
				});
		}
	},
	computed: {
		img() {
			return helpers.productImg(this.product.sku, this.$route.params.color);
		},
		color() {
			return helpers.colorFromRoute(
				this.product.colors,
				this.$route.params.color
			);
		}
	}
};
</script>

<style scoped>
</style>