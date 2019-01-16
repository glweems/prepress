<template>
	<div>
		<p>{{ product.title }}</p>
		<img :src="product.colors[1].img">
	</div>
</template>

<script>
import helpers from "#/helpers";
import prettylog from "glweems-prettylogs";
export default {
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
	}
};
</script>

<style scoped>
</style>