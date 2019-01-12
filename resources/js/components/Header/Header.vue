<template>
	<div class="header-component">
		<div class="header-wrapper">
			<!-- Title & Subtitle -->
			<div class="titles">
				<p v-if="title" class="header-title">{{ title }}</p>
				<p v-if="subtitle" class="header-subtitle">{{ subtitle }}</p>
			</div>
			<p class="header-msg">{{ msg }}</p>
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

	.header-component {
		text-align: center;
		width: 100%;
		padding: none;
	}
	.header-wrapper {
		text-align: center;
		.header-title {
			background: $alt;
			color: $light;
			font-weight: 800;
		}

		.header-subtitle {
			font-weight: 500;
		}

		.msg {
			// color: $dark;
			text-align: left;
			padding: 0 5vw;
		}
	}
</style>