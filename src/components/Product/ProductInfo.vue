<template lang="pug">
.product-info

	.content
		.info
			h1.product-title {{item.title}}
				span.icons
					i.fas.fa-dollar-sign(v-for="index in icon(item.upgrade)")

			swatches(:colors="item.colors")
			
		.details

			ul
				li {{ item.brand }}
				li {{ item.fabric }}
				
			.quote(v-if="this.$route.name == 'product-page-home'")
				router-link.button(:to="quote", :item="item") Get a Quote!
					span
						i.fas.fa-file-invoice-dollar
						
</template>
	
<script>
const Swatches = () =>
	import(/* webpackChunkName: "Swatches" */ "@/components/Swatches");

export default {
	name: "ProductInfo",
	props: ["item"],
	components: {
		Swatches
	},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import "@/sass/main.sass"

.product-info
	height: $screen-height
	
.img-wrapper
	width: 100%
	background: $primary
	+product-img
	text-align: center
	
	img
		padding: 1em .5em
		background: white
		height: 25vh
	
.product-swatches
	
.content

	.info
		padding-top: .7em 
		padding-left: 1em
		
		.product-title
			padding: .5em 0
			font-size: 20px
			margin-right: 1em
			
		.icons
			margin-left: 1em
			i
				padding-right: .1em
				color: $primary

	.details
		text-align: left
		ul
			list-style-type: none
			
	.quote
		margin: 1em 0
		text-align: center
		a
			background: $primary
			color: $light
		span
			padding-left: .5em

    
</style>