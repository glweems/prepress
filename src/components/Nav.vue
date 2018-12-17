<template lang="pug">
nav.nav
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
@import "@/sass/main.sass"
.nav
	display: flex
	background: $dark
	padding: 0.6em
	padding-left: 0
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	font-weight: bold

	.nav-item
		margin-left: 0.5em

a
   padding-right: 0.5em
   color: $light

a.router-link-exact-active
   color: $primary
   font-size: 17px

</style>
