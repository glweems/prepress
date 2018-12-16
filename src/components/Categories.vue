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

</style>