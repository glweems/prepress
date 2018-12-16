<template lang="pug">
.product-list
	ProductItem(v-for="(item, index) in items", :item="items[index]", :key="item.title")
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
	name: "ListItems",
	props: ["items"],
	components: {
		ProductItem
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