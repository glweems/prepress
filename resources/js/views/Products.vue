<template>
	<div class="products">
		<div class="filters scroll">
			<div class="filter scroll-item" v-for="filter in filters" :key="filter.title">
				<p class>{{ filter.title }}</p>
			</div>
		</div>
		<div class="scroll">
			<div
				class="product scroll-item"
				v-for="(product, key) in products"
				:key="key"
				@click="pushRoute(product.sku)"
			>
				<p class="title">{{ product.title }}</p>
				<img :src="productListImg(product)" alt>
				<div class="product-scroll-info">
					<p class="brand">{{ product.brand }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { productFromSku, defaultProductColor, productListImg } from "#/helpers";
export default {
	name: "products",
	components: {
		card: () => import(/* webpackChunkName: "product-card" */ "%/Card/Card")
	},
	data() {
		return {
			filters: [
				{ title: "Brand", items: ["Gildan", "Anvil", "Bella + Canvas"] },
				{ title: "Upgrade", items: [0, 1, 2, 3] }
			],
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

<style lang="scss" scoped>
	@import "sassy";
	.filter {
	}
	.product {
		width: 37vw;
		margin: 0 1.3rem;
		img {
			@include shadow;
			@include corners;
			padding: 0.3em 1.2em;
		}
		.title {
			color: $alt-light;
			font-size: 14px;
			font-family: $font-family;
			font-weight: 600;
			margin-bottom: 0.2em;
		}
	}
</style>