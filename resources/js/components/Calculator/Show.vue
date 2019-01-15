<template>
	<div class="quote-info">
		<back-button :pressed="editQuote">Back Button</back-button>
	</div>
</template>

<script>
export default {
	components: {
		"back-button": () =>
			import(/* webpackChunkName: "back-button" */ "Elements/Button")
	},
	methods: {
		editQuote() {
			this.$router.push({
				name: this.$route.meta.prev
			});
		}
	}
};
</script>

<style scoped>
</style>