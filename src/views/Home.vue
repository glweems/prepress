<template lang="pug">
.home
	page-header(:title="title", :subtitle="subtitle", msg="This is a message")
	
</template>

<script>
export default {
	name: "Home",
	props: ["categories"],
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

