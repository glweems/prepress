<template lang="pug">
.products
	Breadcrums
	router-view(:products="products")
</template>

<script>
import Breadcrums from "@/components/Breadcrums";
export default {
	name: "Products",
	props: ["products"],
	components: {
		Breadcrums
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