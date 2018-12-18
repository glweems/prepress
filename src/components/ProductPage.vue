<template lang="pug">
.product-page

	.img-wrapper
		img#item-img(:src="item.img")
	
	
	.content
		.info
			h1.product-title {{item.title}}
				span.icons
					i.fas.fa-dollar-sign(v-for="index in icon(item.upgrade)")
		
			product-swatches(:colors="item.colors")
			
		.details
		
			ul
				li {{ item.brand }}
				li {{ item.fabric }}
					
			features(:items="item.features")
			
		.quote
			router-link.button(:to="quote") Get a Quote!
				span
					<i class="fas fa-file-invoice-dollar"></i>
	
		
</template>

<script>
import Features from "@/components/Features";
import { Glide, GlideSlide } from "vue-glide-js";
import ProductSwatches from "@/components/ProductSwatches";
export default {
	name: "ProductPage",
	props: ["products"],
	components: {
		"product-swatches": ProductSwatches,
		features: Features,
		"vue-glide": Glide,
		"glide-slide": GlideSlide
	},
	data() {
		return {};
	},
	methods: {
		icon(upgrade) {
			var arr = [];
			var i = 0;
			if (upgrade == 0) {
				upgrade = 1;
			}
			while (i < upgrade) {
				arr.push(i);
				i++;
			}
			return arr;
		}
	},
	computed: {
		quote() {
			let path = {
				name: "product-quote",
				path:
					"/products" +
					"/" +
					this.$route.params.category +
					"/" +
					this.$route.params.style +
					"/" +
					this.$route.params.sku +
					"/quote"
			};
			return path;
		},
		styles() {
			var obj = {};
			var i;
			for (i = 0; i < this.products.length; i++) {
				if (this.products[i].title == this.$route.params.category) {
					obj = this.products[i];
				}
			}
			return obj.styles;
		},
		items() {
			var obj = {};
			var i;
			for (i = 0; i < this.styles.length; i++) {
				if (this.styles[i].title == this.$route.params.style) {
					obj = this.styles[i].items;
				}
			}
			return obj;
		},
		item() {
			var obj = {};
			var i;
			for (i = 0; i < this.items.length; i++) {
				if (this.items[i].sku == this.$route.params.sku) {
					obj = this.items[i];
				}
			}
			return obj;
		}
	}
};
</script>

<style lang="sass" scoped>

@import "@/sass/main.sass"

.product-page
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