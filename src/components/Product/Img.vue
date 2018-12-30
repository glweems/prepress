<template lang="pug">

img#item-img.animated(:src="img", :style="style()")
		
</template>
	
<script>
export default {
	name: "ProductImg",
	props: ["img"],
	components: {},
	data() {
		return {
			home: {
				height: "25vh"
			},
			quote: {
				height: "10vh"
			}
		};
	},
	methods: {
		style() {
			if (this.$route.name == "product-page-home") {
				return this.home;
			} else {
				return this.quote;
			}
		}
	},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

	
img
	transition: .25s
	margin: .5em
	// background: white
	max-width: 100%
	height: auto
	background: $primary
	text-align: center
</style>