<template lang="pug">
.browse
	test(:items="items")
</template>

<script>
import test from "@/components/test";
// import ProductItem from "@/components/ProducItem";
export default {
	name: "Browse",
	props: ["products"],
	components: {
		test
		// "product-list-item": ProductListItem
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