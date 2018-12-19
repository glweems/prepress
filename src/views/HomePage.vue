<template lang="pug">
.home
	page-header(:title="title", :subtitle="subtitle", msg="This is a message")
	
</template>

<script>
const PageHeader = () =>
	import(/* webpackChunkName: "page-header" */ "@/components/PageHeader");

export default {
	name: "HomePage",
	props: ["categories"],
	components: {
		PageHeader
	},
	data() {
		return {
			title: "Home",
			subtitle: "This is a t-shirt pricing calculator"
		};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
span
	color: $primary
</style>

