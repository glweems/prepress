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
		};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"


</style>
