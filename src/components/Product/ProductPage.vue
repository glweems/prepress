<template lang="pug">
.product-page

	product-img(:img="color.path")

	product-title(:title='item.title', :upgrade='item.upgrade')
	transition(name='product-quote-animation' enter-active-class='animated fadeInUp faster')
		router-view(:products="products")
						
</template>

<script>
const ProductTitle = () =>
	import(/* webpackChunkName: "Swatches" */ "@/components/Product/Title");

const Swatches = () =>
	import(/* webpackChunkName: "Swatches" */ "@/components/Swatches");

const ProductImg = () =>
	import(/* webpackChunkName: "product-img" */ "@/components/Product/Img");

export default {
	name: "ProductPage",
	props: ["products"],
	components: {
		"product-img": ProductImg,
		"product-title": ProductTitle,
		Swatches
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

// @import "@/sass/main.sass"

</style>