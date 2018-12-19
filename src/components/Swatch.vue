<template lang="pug">
a(:style=" { background: color.hex } ", @click="swatch($event)")
</template>

<script>
export default {
	name: "Swatch",
	props: ["color"],
	components: {},
	data() {
		return {};
	},
	methods: {
		swatch() {
			this.$emit("active", this.color.abr);
		}
	},
	watch: {},
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