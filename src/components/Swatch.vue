<template lang="pug">
a(:style="style", @click="swatch($event)")
</template>

<script>
export default {
	name: "Swatch",
	props: ["color"],
	components: {},
	data() {
		return {
			style: {
				background: this.color.hex
			},
			active: {
				border: "2px solid pink"
			}
		};
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
	
a.active
	border: 2px solid pink
</style>