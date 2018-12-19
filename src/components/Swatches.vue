<template lang="pug">
.product-swatches
	Swatch(v-for="(color, index) in colors"  :color="colors[index]",  @active="active=$event", :key="color.title")
</template>

<script>
const Swatch = () =>
	import(/* webpackChunkName: "Swatch" */ "@/components/Swatch");

export default {
	name: "product-swatches",
	props: ["colors"],
	components: {
		Swatch
	},
	data() {
		return {
			active: ""
		};
	},
	watch: {
		active() {
			this.$router.replace({ params: { color: this.active } });
		}
	},
	computed: {}
};
</script>

<style lang="sass" scoped>
.product-swatches
	width: 100%
</style>
