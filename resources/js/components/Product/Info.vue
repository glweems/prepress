<template>
	<div class="product-details">
		<swatches :colors="colors"></swatches>
		<features :items="features"></features>
	</div>
</template>

<script>
export default {
	components: {
		features: () =>
			import(/* webpackChunkName: "product-features" */ "%/List/List"),
		swatches: () =>
			import(/* webpackChunkName: "product-swatches" */ "%/Swatches/Swatches")
	},
	props: {
		features: { type: Array },
		colors: { type: Array }
	}
};
</script>

<style scoped>
</style>