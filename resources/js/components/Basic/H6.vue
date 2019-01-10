<template>
	<h6>{{ text }}</h6>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true,
			default: "This is the h6 component"
		}
	}
};
</script>

<style scoped>
</style>