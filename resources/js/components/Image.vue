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
img{
	max-width: 100%;
}
</style>