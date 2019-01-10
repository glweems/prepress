<template>
	<div class="card-header">
		<header-text :text="header" class="card-header-message"></header-text>
	</div>
</template>

<script>
import text from "Basic/P";
export default {
	props: {
		header: {
			type: String,
			required: true
		}
	},
	components: { "header-text": text }
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.card-header {
		background: $light;
	}
</style>