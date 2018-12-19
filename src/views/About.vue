<template lang="pug">
.about
	page-header(:title="title", :subtitle="subtitle")
		
</template>

<script>
export default {
	name: "About",
	data() {
		return {
			title: "About",
			subtitle: "This is the about page"
		};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
span
	color: $primary
</style>
