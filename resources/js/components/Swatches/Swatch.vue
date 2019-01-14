<template>
	<div :class="active()" :style="style" @click="swatch($event)"></div>
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
	div {
		margin: 0 0.25em;
		display: inline-block;
		height: 2.25em;
		width: 100%;
		border-radius: 2px;
	}

	.active {
		border: 3px solid grey;
		// padding: 0 0.5em;
	}
</style>