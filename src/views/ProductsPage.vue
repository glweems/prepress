<template lang="pug">
.products
	//- page-header(v-if="!this.$route.params.category", :title="header.title", :subtitle="header.subtitle", :msg="header.msg")
	//- Breadcrums(v-if="this.$route.params.category")
	transition(
		name="products-animation"
		enter-active-class='animated slideInRight faster'
		)
		router-view(:products="products", @item="item=$event", :product="item")
</template>

<script>
export default {
	name: "Products",
	props: ["products"],
	data() {
		return {
			item: {}
		};
	},
	watch: {
		item() {}
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>