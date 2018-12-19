<template lang="pug">
.product-swatches
	swatch(v-for="(color, index) in colors"  :color="colors[index]" @click="swatch(color)", :key="color.title")
</template>

<script>
export default {
	name: "product-swatches",
	props: ["colors"],
	data() {
		return {};
	},
	computed: {}
};
</script>

<style lang="sass" scoped>
.product-swatches
	width: 100%
</style>
