<template lang="pug">
.home
	page-header(:title="title", :subtitle="subtitle", msg="This is a message")
	
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
	name: "Home",
	props: ["categories"],
	components: {
		"page-header": PageHeader
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

