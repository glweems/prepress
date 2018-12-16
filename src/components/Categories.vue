<template lang="pug">
.categories
	template(v-for="(product, index) in products")
		category(:category="product", :key="product.title")
</template>

<script>
import Category from "@/components/Category";
export default {
	name: "Categories",
	props: ["products"],
	components: {
		category: Category
	},
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.categories
	background: $white
	width: 100%
	border-radius: 1em 1em 0 0
	// margin: 1em
</style>