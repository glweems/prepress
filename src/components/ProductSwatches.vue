<template lang="pug">
.product-swatches
	product-swatch-item(v-for="(color, index) in colors", :color="colors[index]",@click="swatch(color)", :key="color.title")
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
			computed: {}
		};
	}
};
</script>

<style lang="sass" scoped>
.product-swatches
	width: 100%
	text-align: center
.swatch
	margin: 0 .25em
	display: inline-block
	height: 1.25em
	width: 1.25em
	border-radius: 25px
</style>
