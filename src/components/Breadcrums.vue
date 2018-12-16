<template lang="pug">
.breadcrums
	nav
		breadcrum(title="All Products", path="/products")
		breadcrum(v-if="category", :title="category.title", :path="category.path")
		breadcrum(v-if="style", :title="style.title", :path="style.path")
		breadcrum(v-if="sku", :title="sku.title", :path="sku.path")
</template>

<script>
import Breadcrum from "@/components/Breadcrum";
export default {
	name: "Breadcrums",
	components: {
		breadcrum: Breadcrum
	},
	data() {
		return {};
	},
	methods: {},
	computed: {
		category() {
			return {
				title: this.$route.params.category,
				path: `/products/${this.$route.params.category}`
			};
		},
		style() {
			return {
				title: this.$route.params.style,
				path: `/products/${this.$route.params.category}/${
					this.$route.params.style
				}`
			};
		},
		sku() {
			return {
				title: this.$route.params.sku,
				path: `/products/${this.$route.params.category}/${
					this.$route.params.style
				}/${this.$route.params.sku}`
			};
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.breadcrums
	background: $light
	padding: .2em .25em
	border-bottom: 1.75px solid $secondary
	nav
		padding: 0 .75em
		display: inline
		color: $primary
		a
			font-size: 20px
			margin-right: .5em
			font-weight: 400
</style>