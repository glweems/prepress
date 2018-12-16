<template lang="pug">
.style
	img(:src="item.img")
	router-link(:to="path") {{ item.title }}
</template>

<script>
// import Component from "@/components/";
export default {
	name: "Style",
	props: ["item"],
	components: {},
	data() {
		return {};
	},
	methods: {},
	computed: {
		path() {
			return (
				"/products/" + this.$route.params.category + "/" + this.item.title
			);
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.style
	text-align: center
	padding: 1em 3em
	corner-radius: 7em
	// margin: 1em
a
	color: $primary
	font-size: 5vh
</style>