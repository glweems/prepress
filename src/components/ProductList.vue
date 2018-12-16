<template lang="pug">
.product-list
	p hi
	//- product-list-item(:items="items")
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
	name: "ProductsList",
	props: ["items"],
	components: {
		"product-item": ProductsItem
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