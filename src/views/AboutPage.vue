<template lang="pug">
.about
	page-header(:title="title", :subtitle="subtitle")
		
</template>

<script>
const PageHeader = () =>
	import(/* webpackChunkName: "page-header" */ "@/components/PageHeader");

export default {
	name: "About",
	components: {
		PageHeader
	},
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
