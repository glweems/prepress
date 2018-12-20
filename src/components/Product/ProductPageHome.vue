<template lang="pug">
.product-page

	.img-wrapper
		img#item-img(:src="color.path")
	
	
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
				
			transition(name='products-animation' enter-active-class='animated slideInRight faster')
				router-view(:features="item.features")
			
			.quote(v-if="this.$route.name == 'product-page-home'")
				router-link.button(:to="quote", :item="item") Get a Quote!
					span
						<i class="fas fa-file-invoice-dollar"></i>
						
</template>

<script>
const Swatches = () =>
	import(/* webpackChunkName: "Swatches" */ "@/components/Swatches");

const Features = () =>
	import(/* webpackChunkName: "Features" */ "@/components/Product/Features");

export default {
	name: "ProductPageHome",
	props: ["products"],
	components: {
		Swatches,
		Features
	},
	created() {
		let msg = "Item Created: " + this.item.title;
		console.log(msg);
		this.$emit("item", this.item);
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
				params: {
					category: this.$route.params.category,
					style: this.$route.params.style,
					sku: this.$route.params.sku,
					sku: this.$route.params.sku,
					color: this.$route.params.color
				}
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
		},
		color() {
			var obj = {};
			var i;
			for (i = 0; i < this.item.colors.length; i++) {
				if (this.item.colors[i].abr == this.$route.params.color) {
					obj = this.item.colors[i];
				}
			}
			return obj;
			// return this.$route.params.color;
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