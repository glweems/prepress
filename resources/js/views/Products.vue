<template>
	<div class="products">
		<div
			class="product"
			v-for="product in products"
			:key="product.sku"
			@click="pushRoute(product.id)"
		>
			<card
				:header="product.title"
				:img="productListImg(product)"
				:title="product.brand"
				:msg="product.title"
				:subtitle="product.sku"
				:key="product.sku"
			></card>
		</div>
	</div>
</template>

<script>
import { productFromSku, defaultProductColor, productListImg } from "#/helpers";
import button from "Elements/Button";
import card from "%/Card/Card";
export default {
	name: "products",
	components: {
		card,
		product: button
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
		productListImg,
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
			const product = productFromSku(this.products, sku);
			const color = defaultProductColor(product.colors);
			this.$router.push({ path: `/product/${sku}/${color.abr}` });
		}
	}
};
</script>

<style scoped>
</style>