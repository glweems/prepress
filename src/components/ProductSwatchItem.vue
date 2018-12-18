<template lang="pug">
a(:style=" { background: color.hex } ", @click="swatch(color)")
</template>

<script>
// import Component from "@/components/";
export default {
	name: "ProductSwatchItem",
	props: ["color"],
	components: {},
	data() {
		return {};
	},
	methods: {
		swatch(color) {
			document.getElementById("item-img").src = color.path;
			this.$router.push({
				query: { color: color.abr }
			});
		}
	},
	computed: {}
};
</script>

<style lang="sass" scoped>
a
	margin: 0 .25em
	display: inline-block
	height: 1.5em
	width: 1.5em
	border-radius: 25px
</style>