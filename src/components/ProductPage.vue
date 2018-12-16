<template lang="pug">
.product-page
	.card
		.card-content
			p.title.is-5 {{item.title}}
			p.subtitle.is-6 {{ item.brand }}
			.media-content
				img#item-img(:src="item.img")
			product-swatches(:colors="item.colors")
			.content
				.features
					ul
						template(v-for="(feature, index) in item.features")
							li {{ feature }}
			.quote-btn
				el-button(type='success' @click="getQuote()" plain) Get Quote
</template>

<script>
import ProductSwatches from "@/components/ProductSwatches";
export default {
	name: "ProductPage",
	props: ["products"],
	components: {
		"product-swatches": ProductSwatches
	},
	data() {
		return {};
	},
	methods: {},
	computed: {
		styles() {
			var obj = {};
			var i;
			for (i = 0; i < this.products.length; i++) {
				if (this.products[i].title == this.$route.params.category) {
					obj = this.products[i];
				}
			}
			return obj.styles;
		},
		items() {
			var obj = {};
			var i;
			for (i = 0; i < this.styles.length; i++) {
				if (this.styles[i].title == this.$route.params.style) {
					obj = this.styles[i].items;
				}
			}
			return obj;
		},
		item() {
			var obj = {};
			var i;
			for (i = 0; i < this.items.length; i++) {
				if (this.items[i].sku == this.$route.params.sku) {
					obj = this.items[i];
				}
			}
			return obj;
		}
	}
};
</script>

<style lang="sass" scoped>
.quote-btn
	text-align: center
</style>