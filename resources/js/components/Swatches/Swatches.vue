<template>
	<div class="swatches">
		<swatch v-for="color in colors" :color="color" @active="active=$event" :key="color.title"></swatch>
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

<style scoped>
	.swatches {
		display: flex;
		width: 100%;
	}
</style>