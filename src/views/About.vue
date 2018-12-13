<template lang="pug">
.about

	p.title This is the 
		span About
		| 	page
		
	p This is a t-shirt pricing calulator
		
</template>

<script>
import Items from "@/App";
export default {
	name: "About",
	data() {
		return {
			Items: {}
		};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
span
	color: $primary
</style>
