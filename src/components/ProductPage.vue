<template lang="pug">
.product-page
	.info
		p.title.is-5 {{item.title}}
		p.subtitle.is-6 {{ item.brand }}
	VueGlide(perView="1" rewind="false" bound="true")
		GlideSlide(v-for="(color, index) in item.colors" :key="index")
			.img-wrapper
				img#item-img(:id="color.abr" :src="color.path")
	product-swatches(:colors="item.colors")
	.content
		features(:items="item.features")
		el-button(type='success' @click="getQuote()" plain) Get Quote
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
		[Glide.name]: Glide,
		[GlideSlide.name]: GlideSlide
	},
	data() {
		return {};
	},
	methods: {},
	computed: {
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
	.info
		padding: 2em
	.content
		text-align: center
	
.img-wrapper
	padding: .75em
	img
		padding: 1em 4.5em
		background: white
		border-radius: .5em
		box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
		-webkit-transition: opacity 1s ease-in-out
		-moz-transition: opacity 1s ease-in-out
		-o-transition: opacity 1s ease-in-out
		transition: opacity 1s ease-in-out
</style>