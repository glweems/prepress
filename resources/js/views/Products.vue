<template>
	<div>
		<div v-for="product in products" :key="product.id">
			<h4>{{ product.title }}</h4>
			<p>{{ product.brand }}</p>
			<small>{{ product.sku }}</small>
		</div>
	</div>
</template>

<script>
export default {
	name: "Products",
	data() {
		return {
			products: [],
			product: {
				id: "",
				sku: "",
				title: ""
			},
			product_id: "",
			pagination: {}
		};
	},
	created() {
		this.fetchProducts();
	},
	methods: {
		fetchProducts(page_url) {
			let vm = this;
			page_url = page_url || "/api/products";
			fetch(page_url)
				.then(res => res.json())
				.then(res => {
					this.products = res.data;
					vm.makePagination(res.meta, res.links);
				});
		},
		makePagination(meta, links) {
			let pagination = {
				currentPage: meta.current_page,
				lastPage: meta.last_page,
				nextPage: links.next,
				prevPage: links.prev
			};
			this.pagination = pagination;
		}
	}
};
</script>

<style scoped>
</style>