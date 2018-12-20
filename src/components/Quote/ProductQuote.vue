<template lang="pug">
.product-quote
	//- quote-step
	calculator(:product="product")
</template>
	
<script>
const Calculator = () =>
	import(/* webpackChunkName: "calculator" */ "@/components/Calculator/Calculator");

export default {
	name: "ProductQuote",
	props: ["products", "product"],
	components: {
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
@import '@/sass/main.sass'
.product-quote
	background: $primary
	margin: .5em
	padding: .5em
	border-radius: .5em
	transition: 1s
    
</style>