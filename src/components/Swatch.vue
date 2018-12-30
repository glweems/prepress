<template lang="pug">
.swatch(:id="color.abr", :style="style", :class="active()" @click="swatch($event)")
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
			}
		};
	},
	methods: {
		swatch() {
			this.$emit("active", this.color.abr);
		},
		active() {
			let color = this.color.abr;
			let active = this.$route.params.color;
			if (color == active) {
				return "active";
			}
		}
	},
	watch: {},
	computed: {}
};
</script>

<style lang="sass" scoped>
@import '@/sass/main.sass'

.swatch
	margin: 0 .25em
	display: inline-block
	height: 2.25em
	width: 100%
	border-radius: 2px
	+product-img
	
.active
	border: 3px solid $primary
</style>