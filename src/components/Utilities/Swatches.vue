<template lang="pug">
.swatches
	swatch(v-for="(color, index) in colors", :color="colors[index]")
</template>

<script>
export default {
	name: "Swatches",
	props: ["colors"],
	data() {
		return {
			computed: {},
			methods() {},
			swatch(color) {
				document.getElementById("item-img").src = color.path;
				this.$router.push({
					query: { color: color.abr }
				});
			},
			created: {}
		};
	}
};
</script>

<style lang="sass" scoped>
.swatches
	width: 100%
	text-align: center
.swatch
	margin: 0 .25em
	display: inline-block
	height: 1em
	width: 1em
	border-radius: 25px
</style>
