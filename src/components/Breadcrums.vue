<template lang="pug">
.breadcrums
	nav
		breadcrum(title="All Products", path="/products")
		breadcrum(v-if="category", :title="category", path="/products")
		breadcrum(v-if="style", :title="style", path="/products")
		breadcrum(v-if="item", :title="item", path="/products")
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
			return this.$route.params.category;
		},
		style() {
			return this.$route.params.style;
		},
		item() {
			return this.$route.params.item;
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.breadcrums
	background: $light
	padding: .5em 1em
	nav
		padding: 0 1em
		display: inline
		color: $primary
		a
			margin-right: 1em
</style>