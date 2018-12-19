<template lang="pug">
.product-quote
	product-list-item(:item="item")
	calculator(:product="product")
</template>
	
<script>
const ProductListItem = () =>
	import(/* webpackChunkName: "product-list-item" */ "@/components/ProductListItem");

const Calculator = () =>
	import(/* webpackChunkName: "calculator" */ "@/components/Calculator/Calculator");

export default {
	name: "ProductQuote",
	props: ["products", "product"],
	components: {
		"product-list-item": ProductListItem,
		calculator: Calculator
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
		},
		color() {
			var obj = {};
			var i;
			for (i = 0; i < this.item.colors.length; i++) {
				if (this.item.colors[i].abr == this.$route.params.color) {
					obj = this.item.colors[i];
				}
			}
			return obj;
			// return this.$route.params.color;
		}
	}
};
</script>
	
<style lang="sass" scoped>
.product-quote
    
</style>