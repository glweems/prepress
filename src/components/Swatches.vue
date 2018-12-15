<template lang="pug">
.swatches
	template(v-for="(color, index) in item.colors")
		a.swatch.card(@click="swatch(color)", :style=" { background: color.hex } ")
</template>

<script>
export default {
	name: "Swatches",
	props: ["item"],
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

.swatch
	margin: 0 .25em
	display: inline-block
	height: 1em
	width: 1em
	border-radius: 25px
</style>
