<template lang="pug">
.product-list
	product-list-item(v-for="(item, index) in items", :item="items[index]", :key="item.title")
</template>

<script>
const ProductListItem = () =>
	import(/* webpackChunkName: "product-list-item" */ "@/components/ProductListItem");

export default {
	name: "ProductList",
	props: ["items"],
	components: {
		ProductListItem
	},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>