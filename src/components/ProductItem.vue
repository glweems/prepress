<template lang="pug">
.products-item
	img(:src="tbn")
	.info 
		p.item-title {{ item.title }}
		p.item-brand {{ item.brand }}
		p.item-fabric {{ item.fabric }}
		router-link(v-if="this.$route.name != 'quote'", :to="url") Select
</template>

<script>
export default {
	name: "ProductsItem",
	props: ["item"],
	data() {
		return {};
	},
	methods: {},
	computed: {
		url() {
			return {
				name: "product",
				params: {
					sku: this.item.sku
				}
			};
		},
		tbn() {
			return this.item.colors[0].path;
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.products-item
	background: white
	border-radius: .35em
	display: grid
	grid-template-columns: 2fr 4fr
	margin: .35em
	border: 3px solid $light-dark
	
	img
		padding: 1em
		
	.info
		padding-top: 1em
		
		.item-title
			color: $dark
			font-size: 18px
			
		.item-brand
			color: $primary-dark
			font-size: 16px
			font-weight: 400
			
		.item-fabric
			color: $dark
			font-size: 14px
			font-weight: 300

</style>
