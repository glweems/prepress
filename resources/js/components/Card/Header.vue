<template>
	<div class="container">
		<p class="card-header-message text-medium">{{ header }}</p>
	</div>
</template>

<script>
export default {
	props: {
		header: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.card-header {
		// background: $light;
	}
</style>