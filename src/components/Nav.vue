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
</style>
