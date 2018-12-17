<template lang="pug">
.quote
	page-header(:title="title", :subtitle="subtitle")
	router-view(:item="defaultProduct")
	calculator(:product="defaultProduct")
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Calculator from "@/components/Calculator/Calculator";
export default {
	name: "Quote",
	props: ["products"],
	components: {
		"page-header": PageHeader,
		Calculator
	},
	data() {
		return {
			title: "Get a quick quote",
			subtitle: "Three Quick Easy Steps"
		};
	},
	computed: {
		defaultProduct() {
			return this.products[0].styles[0].items[0];
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.quote
	background: $light
	height: 100vh
</style>
