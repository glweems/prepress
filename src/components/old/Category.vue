<template lang="pug">
.category
	img(:src="category.img")
	router-link(:to="{path: `/products/${category.title}`}") {{ category.title }}
</template>

<script>
export default {
	name: "category",
	props: ["category"],
	components: {},
	data() { return {}; },
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
a
	color: $primary
	font-size: 5vh
</style>