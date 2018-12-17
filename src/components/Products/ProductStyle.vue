<template lang="pug">
.product-style(@click="link()")
	h1.style-title {{item.title}}
	img(:src="item.img")
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
.product-style
	margin: 0.35em
	padding: .5em
	
	.style-title
		padding-left: .2em
		padding-bottom: .5em
	
	img
		background: white
		padding: 0 .5em
		min-width: 40vw
		border-radius: 3px;
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		
	.style-title
		color: $alt-dark

</style>