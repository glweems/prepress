<template lang="pug">
.swatches
	product-swatch-item(v-for="(color, index) in colors", :color="colors[index]")
		//- (v-for="(color, index) in item.colors",
		//- @click="swatch(color)", :color="colors[index]")
</template>

<script>
import ProductSwatchItem from "@/components/ProductSwatchItem";
export default {
	name: "product-swatches",
	props: ["colors"],
	components: {
		"product-swatch-item": ProductSwatchItem
	},
	data() {
		return {
			computed: {},
			methods() {},
			swatch(color) {
				document.getElementById("item-img").src = color.path;
				this.$router.push({
					query: { color: color.abr }
				});
			},
			created: {}
		};
	}
};
</script>

<style lang="sass" scoped>
.swatches
	width: 100%
	text-align: center
.swatch
	margin: 0 .25em
	display: inline-block
	height: 1em
	width: 1em
	border-radius: 25px
</style>
