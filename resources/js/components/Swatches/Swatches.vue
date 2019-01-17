<template>
	<div class="swatches scroll">
		<swatch
			v-for="color in colors"
			:color="color"
			@active="active=$event"
			:key="color.title"
			class="scroll-item"
		></swatch>
	</div>
</template>

<script>
import swatch from "%/Swatches/Swatch";
// import prettylog from "glweems-prettylogs";
export default {
	props: ["colors"],
	components: {
		swatch
	},
	data() {
		return {
			active: {}
		};
	},
	watch: {
		active() {
			this.$router.replace({ params: { color: this.active.abr } });
			this.$emit("color", this.active);
			// prettylog.success("Swatch: " + this.active.title + " set.");
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.swatches {
		justify-content: center;
		padding-top: 0.3em;
		padding-bottom: 0.05em;
		padding-left: 1em;
		margin-bottom: 1em;
		// background: $primary;
	}
</style>