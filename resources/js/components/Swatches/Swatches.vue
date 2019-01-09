<template>
	<div class="swatch-wrapper">
		<swatch v-for="color in colors" :color="color" :key="color.title"></swatch>
	</div>
</template>

<script>
import swatch from "%/Swatches/Swatch";
export default {
	props: ["colors"],
	components: {
		swatch
	}
};
</script>

<style scoped>
</style>