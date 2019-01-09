<template>
	<div class="products">
		<div
			class="product"
			v-for="product in products"
			:key="product.sku"
			@click="pushRoute(product.id)"
		>
			<card :header="product.title" :title="product.brand" :subtitle="product.sku" :key="product.sku"></card>
		</div>
	</div>
</template>

<script>
import card from "%/Card/Card";
export default {
	name: "products",
	components: {
		card
	},
	data() {
		return {
			products: [],
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
		},
		pushRoute(sku) {
			this.$router.push({ path: `/product/${sku}` });
		}
	}
};
</script>

<style scoped>
</style>