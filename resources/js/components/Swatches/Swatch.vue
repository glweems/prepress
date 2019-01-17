<template>
	<div :class="active()" :style="style" @click="swatch($event)" class="swatch"></div>
</template>

<script>
export default {
	props: ["color"],
	methods: {
		swatch() {
			this.$emit("active", this.color);
		},
		active() {
			let classes = ["border"];
			if (this.color.abr == this.$route.params.color) {
				classes.push("active");
			}
			return classes;
		}
	},
	computed: {
		style() {
			return {
				background: this.color.hex
			};
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.swatch {
		padding: 0.5em;
		margin: 0 0.25em;
		height: 2.25em;
		width: 2.25em;
		border-radius: 20px;
	}

	.active {
		@include shadow;
	}
</style>