<template>
	<div class="wrapper">
		<!-- Filters -->
		<filters :filters="filters"></filters>
		<!-- Products -->
		<div class="products">
			<!-- Scroller -->
			<div class="scroll">
				<!-- Scroll Item -->
				<div class="scroll-item" v-for="(product, key) in products" :key="key">
					<!-- Product -->
					<div class="product" @click="pushRoute(product.sku)">
						<!-- Title -->
						<p class="title">{{ product.title }}</p>
						<!-- Image -->
						<img :src="productListImg(product)" alt>
						<div class="product-scroll-info">
							<p class="brand">{{ product.brand }}</p>
						</div>
					</div>
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
		filters: () =>
			import(/* webpackChunkName: "product-filters" */ "%/Filter/Filter")
	},
	data() {
		return {
			filters: [
				{ label: "Brand", items: ["Gildan", "Anvil", "Bella + Canvas"] },
				{ label: "Upgrade", items: [0, 1, 2, 3] },
				{
					label: "Fabric",
					items: ["100% Cotton", "Dri-Fit", "Polyester", "50%-50%"]
				}
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