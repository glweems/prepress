<template lang="pug">
.products-viewer
	product-styles(v-for="product in products", :styles="product.styles",:product="product.title", :key="product.title")
		
</template>
	
<script>
const ProductStyles = () =>
	import(/* webpackChunkName: "product-styles" */ "@/components/Products/ProductStyles");

export default {
	name: "ProductsViewer",
	props: ["products", "product"],
	components: { "product-styles": ProductStyles },
	created() {
		let item = {};
		this.$emit("item", item);
		console.log("Item Destroyed");
	},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import "@/sass/main.sass"
.products-viewer
	height: 100vh
	padding-top: .5em
	// background: $alt
	color: $light
</style>