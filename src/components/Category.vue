<template lang="pug">
.category
	img(:src="category.img")
	router-link(:to="{path: `/products/${category.title}`}") {{ category.title }}
		//- router-link(:to="path") {{ title }}
</template>

<script>
import CategoryStyle from "@/components/CategoryStyle";
export default {
	name: "category",
	props: ["category"],
	components: {
		"category-style": CategoryStyle
	},
	data() {
		return {};
	},
	computed: {},
	methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.category
	text-align: center
	padding: 1em 3em
	corner-radius: 7em
	// margin: 1em
a
	color: $primary
	font-size: 5vh
</style>