<template lang="pug">
.swatch(:id="color.abr", :style="style", @click="swatch($event)")
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
.swatch
	margin: 0 .25em
	display: inline-block
	height: 2.25em
	width: 100%
	border-radius: 2px
	
.active
	border: 2px solid pink
</style>