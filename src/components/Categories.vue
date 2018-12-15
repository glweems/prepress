<template lang="pug">
.categories

	category(
		v-for="(category, index) in categories"
		:title="category.title"
		:img="category.img"
		:key="category.title")
		
</template>

<script>
import Category from "@/components/Category";
export default {
	name: "Categories",
	props: ["categories"],
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