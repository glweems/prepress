<template>
	<div class="product-details">
		<swatches :colors="colors"></swatches>
		<features :items="features"></features>
	</div>
</template>

<script>
import swatches from "%/Swatches/Swatches";
export default {
	components: {
		features: () =>
			import(/* webpackChunkName: "product-features" */ "%/List/List"),
		swatches
	},
	props: {
		features: { type: Array },
		colors: { type: Array }
	}
};
</script>

<style scoped>
</style>