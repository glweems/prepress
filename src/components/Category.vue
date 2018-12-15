<template lang="pug">
.category
	h6 {{ title }}
	img(:src="img")
</template>

<script>
export default {
	name: "Category",
	props: ["title", "img"],
	data() {
		return {};
	}
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