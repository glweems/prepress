<template>
	<img :src="img" :alt="alt">
</template>

<script>
export default {
	props: {
		img: String,
		alt: String
	}
};
</script>

<style scoped>
	img {
		box-sizing: inherit;
		height: auto;
		max-width: 100%;
	}
</style>