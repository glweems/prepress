<template lang="pug">
.products-list-item
	img(:src="item.colors[0].path")
	.info 
		p.item-title {{ item.title }}
		p.item-brand {{ item.brand }}
		p.item-fabric {{ item.fabric }}
		router-link(:to="itemPath") Select
</template>

<script>
export default {
	name: "ProductsListItem",
	props: ["item"],
	data() {
		return {};
	},
	methods: {},
	computed: {
		itemPath() {
			return `/products/${this.$route.params.category}/${
				this.$route.params.style
			}/${this.item.id}`;
		}
	}
};
</script>

<style lang="sass" scoped>
.products-list-item
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