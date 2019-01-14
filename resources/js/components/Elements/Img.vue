<template>
	<div class="img">
		<img :src="img" :alt="alt">
	</div>
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
	.img {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: 1em 0;
	}
	img {
		padding: 1em;
		height: auto;
		max-width: 80%;
	}
</style>