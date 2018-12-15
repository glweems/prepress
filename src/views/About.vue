<template lang="pug">
.about
	page-header(:title="title", :subtitle="subtitle")
		
</template>

<script>
import PageHeader from "@/components/PageHeader";
import Items from "@/App";
export default {
	name: "About",
	components: {
		"page-header": PageHeader
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
