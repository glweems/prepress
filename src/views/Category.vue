<template lang="pug">
.category
	h6 {{ items }}
	img(:src="img")
</template>

<script>
export default {
	name: "Category",
	props: ["items"],
	data() {
		return {};
	},
	computed: {
		url() {}
	},
	methods: {}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"

.category
	padding: 1em
	text-align: center
	// margin: 1em
	// background: $primary
	
	p
		color: $light
</style>