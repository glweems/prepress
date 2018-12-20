<template lang="pug">
.content
	swatches(:colors="item.colors")
		
	ul
		li {{ item.brand }}
		li {{ item.fabric }}
		
					
	Features(:features='item.features')
	
	quote-btn


</template>

<script>
const Swatches = () =>
	import(/* webpackChunkName: "Swatches" */ "@/components/Swatches");

const Features = () =>
	import(/* webpackChunkName: "Features" */ "@/components/Product/Features");

const QuoteButton = () =>
	import(/* webpackChunkName: "quote-button" */ "@/components/Product/QuoteBtn");

export default {
	name: "ProductContent",
	props: ["products"],
	components: {
		Swatches,
		Features,
		"quote-btn": QuoteButton
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

@import "@/sass/main.sass"
	
.content
	text-align: left
	ul
		list-style-type: none
			
	.quote

	
</style>