<template lang="pug">
.product-style-wrapper
	.product-style(@click="link()")
		h1.style-title {{item.title}}
		img(:src="item.img" lazy)
</template>
	
<script>
export default {
	name: "ProductStyle",
	props: ["item", "product"],
	components: {},
	data() {
		return {};
	},
	methods: {
		link() {
			let dest =
				this.$route.path + "/" + this.product + "/" + this.item.title;
			this.$router.push(dest);
		}
	},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import "@/sass/main.sass"
.product-style-wrapper
	
	.product-style
		margin: 0.35em
		
		.style-title
			padding-left: .2em
			padding-bottom: .5em
		
		img
			padding: 0 0.5em
			max-width: 40vw
			+product-img

			
		.style-title
			color: $alt-lighter
	
</style>