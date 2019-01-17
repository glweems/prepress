<template>
	<div>
		<div class="container">
			<div class="inline">
				<p class="title">{{ product.title }}</p>
				<p v-if="color.hex && product" class="subtitle" :style="{color: color.hex}">{{ color.title }}</p>
			</div>
			<img :src="img">
		</div>
		<swatches :colors="product.colors"/>
		<button class="button button-small" @click="getQuote">Get Quote</button>
		<div class="container">
			<h4 class="title">Description</h4>
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
		},
		getQuote() {
			this.$router.push({ path: this.$route.path + "/quote" });
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

<style lang="scss" scoped>
	@import "sassy";
	img {
		padding: 0 2em;
		margin: 1em 0;
	}
</style>