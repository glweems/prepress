<template lang="pug">
.nav
	nav
		.nav-brand
			i(:src="brand")
		.nav-item(v-for="page in pages")
			router-link(:to="page.path", :key="page.id") {{ page.id }}
	
</template>

<script>
export default {
	name: "Nav",
	props: ["pages"],
	data() {
		return {
			brand: require("@/assets/icon-logo.svg")
		};
	}
};
</script>

<style lang="sass" scoped>
nav
	display: flex
	background: white
	padding: 1vh 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	text-align: right
	
	// .nav-brand

	

a
	padding: 0 1vw

</style>
