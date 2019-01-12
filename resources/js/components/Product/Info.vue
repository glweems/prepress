<template>
	<div class="product-details">
		<swatches :colors="colors"></swatches>
		<features :items="features"></features>
	</div>
</template>

<script>
import swatches from "%/Swatches/Swatches";
import features from "%/List/List";
export default {
	components: { features, swatches },
	props: {
		features: { type: Array },
		colors: { type: Array }
	}
};
</script>

<style scoped>
</style>