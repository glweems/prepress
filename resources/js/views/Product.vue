<template>
	<div>
		<h6>Single Product Page</h6>
		<p>{{ product.title }}</p>
	</div>
</template>

<script>
export default {
	data() {
		return {
			product: {}
		};
	},
	created() {
		this.fetchProduct();
	},
	methods: {
		fetchProduct() {
			const api = "/api/product/" + this.$route.params.sku;
			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					this.product = data;
					console.log(data);
				})
				.catch(err => {
					console.log("error");
				});
		}
	},
	computed: {}
};
</script>

<style scoped>
</style>