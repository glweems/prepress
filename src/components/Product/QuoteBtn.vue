<template lang="pug">
.quote-button
	router-link.button(to="quote") Get a Quote!
		span
			<i class="fas fa-file-invoice-dollar"></i>    
</template>
	
<script>
export default {
	name: "QuoteButton",
	props: [""],
	components: {},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

.quote-button
	margin: 1em 0
	text-align: center
	a
		background: $primary
		color: $light
	span
		padding-left: .5em    
</style>