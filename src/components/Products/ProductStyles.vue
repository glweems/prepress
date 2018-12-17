<template lang="pug">
.product-styles
	.info
		h1 {{product}}
	scroller
		product-style(v-for="(style, index) in styles", :key="style.title", :item="styles[index]", :product="product")
	
</template>
	
<script>
import ProductStyle from "@/components/Products/ProductStyle";
import Scroller from "@/components/Scroller";

export default {
	name: "ProductStyles",
	props: ["product", "styles"],
	components: { "product-style": ProductStyle, scroller: Scroller },
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
	color: $alt-lighter
	font-size: 30px

    
  

</style>