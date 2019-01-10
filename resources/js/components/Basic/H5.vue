<template>
	<h5>{{ text }}</h5>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true,
			default: "This is the h5 component"
		}
	}
};
</script>

<style scoped>
</style>