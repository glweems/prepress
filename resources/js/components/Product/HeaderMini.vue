<template>
	<div class="header-mini">
		<img class="header-mini-img" :src="img">
		<div class="header-mini-info">
			<p>{{ title }}</p>
			<p>{{ brand }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
			default: "Product Title"
		},
		brand: {
			type: String,
			required: true,
			default: "Product Brand"
		},
		img: {
			type: String
		}
	}
};
</script>

<style lang="scss" scoped>
	.header-mini {
		display: grid;
		max-height: 8vh;
	}
	.header-mini-img {
		height: auto;
		width: auto;
		// width: auto;
	}
</style>