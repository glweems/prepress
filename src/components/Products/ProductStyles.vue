<template lang="pug">
.product-styles
	.info
		h1 {{product}}
	Scroller
		product-style(v-for="(style, index) in styles", :key="style.title", :item="styles[index]", :product="product")
	
</template>
	
<script>
const ProductStyle = () =>
	import(/* webpackChunkName: "product-style" */ "@/components/Products/ProductStyle");

const Scroller = () =>
	import(/* webpackChunkName: "Scroller" */ "@/components/Utilities/Scroller");

export default {
	name: "ProductStyles",
	props: ["product", "styles"],
	components: { "product-style": ProductStyle, Scroller },
	data() {
		return {};
	},
	methods: {
		style() {
			return this.styles;
		}
	},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import "@/sass/main.sass"
.product-styles
.info
	padding: 1em
h1
	color: $alt
	font-size: 30px

    
  

</style>