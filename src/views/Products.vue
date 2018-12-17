<template lang="pug">
.products
	//- page-header(v-if="!this.$route.params.category", :title="header.title", :subtitle="header.subtitle", :msg="header.msg")
	//- Breadcrums(v-if="this.$route.params.category")
	transition(
		name="products-animation"
		enter-active-class='animated slideInRight faster'
		)
		router-view(:products="products")
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Breadcrums from "@/components/Breadcrums";
export default {
	name: "Products",
	props: ["products"],
	components: {
		"page-header": PageHeader,
		Breadcrums
	},
	data() {
		return {
			header: {
				title: "BROWSE OUR PRODUCTS",
				subtitle: "SHOP BY STYLE",
				msg:
					"Browse our catalog of hundreds of product style and color combinations to find the perfect shirt to customize. We think you'll be amazed at the quality of our t-shirts, tank tops, hoodies, hats, and lots more."
			}
		};
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>