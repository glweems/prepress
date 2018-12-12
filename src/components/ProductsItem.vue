<template lang="pug">
.products-item
	img(:src="tbn")
	.info 
		p.item-title {{ item.title }}
		p.item-brand {{ item.brand }}
		p.item-fabric {{ item.fabric }}
		router-link(:to="url") go
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
				path: "/product",
				query: {
					id: this.item.id
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
.products-item
	background: white
	border-radius: .35em
	display: grid
	grid-template-columns: 2fr 4fr
	margin: .35em
	
	img
		padding: 1em
		
	.info
		padding-top: 1em
		
		.item-title
			font-size: 18px
			
		.item-brand
			font-size: 16px
			
		.item-fabric
			font-size: 14px

</style>