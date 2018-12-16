<template lang="pug">
.product-list
	template(v-for="item in items")
		ProductItem(:item="item")
</template>

<script>
import ProductItem from "@/components/ProductItem";
export default {
	name: "test",
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