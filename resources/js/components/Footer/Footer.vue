<template>
	<footer>
		<p>{{ msg }}</p>
	</footer>
</template>

<script>
export default {
	props: {
		msg: {
			type: String,
			required: true
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	footer {
		text-align: center;
		// height: 5em;
		// color: $light;
		// background: $alt;
	}
</style>