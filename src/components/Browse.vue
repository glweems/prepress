<template lang="pug">
.browse
	product-list(:items="items")
</template>

<script>
const ProductList = () =>
	import(/* webpackChunkName: "product-list" */ "@/components/ProductList");

export default {
	name: "Browse",
	props: ["products"],
	components: {
		ProductList
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
		}
	}
};
</script>

<style lang="sass" scoped>

</style>