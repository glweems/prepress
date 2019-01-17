<template>
	<div class="header">
		<div class="container">
			<!-- Title & Subtitle -->
			<div class="titles">
				<p v-if="title" class="title">{{ title }}</p>
				<p v-if="subtitle" class="subtitle">{{ subtitle }}</p>
			</div>
			<!-- Header Msg -->
			<p class="msg">{{ msg }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: false
		},
		subtitle: {
			type: String,
			required: false
		},
		msg: {
			type: String,
			required: false
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";

	.header {
		background: $light;
		padding: 1em 0;
		.titles {
			padding: 1em 0;
			.title {
				color: $primary;
				font-size: 2em;
				font-weight: 800;
				margin: 0;
			}
			.subtitle {
				font-size: 1.25em;
				color: $secondary;
				margin: 0;
			}
		}
	}
</style>