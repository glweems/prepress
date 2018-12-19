<template lang="pug">
.product-list
	product-list-item(v-for="(item, index) in items", :item="items[index]", :key="item.title")
</template>

<script>
export default {
	name: "ProductList",
	props: ["items"],
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>