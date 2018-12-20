<template lang="pug">

.product-img

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
				height: "15vh"
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

.product-img
	width: 100%
	background: $primary
	+product-img
	text-align: center
	
img
	transition: .25s
	padding: 1em .5em
	background: white
</style>