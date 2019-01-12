<template>
	<a @click="push" class="nav-component-item">{{ text }}</a>
	<!-- <nav-link :to="to" class="nav-component-item">{{ text }}</nav-link> -->
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true
		},
		path: {
			type: String,
			required: false
		},
		color: {
			type: String,
			default: "light"
		}
	},
	data() {
		return {};
	},
	methods: {
		push() {
			this.$router.push({ path: this.path });
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.nav-component-item {
		padding: 0.25em 0.25em;
	}
</style>