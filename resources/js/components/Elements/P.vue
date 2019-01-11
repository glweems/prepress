<template>
	<p>{{ text }}</p>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			required: true,
			default: "This is the paragraph component"
		}
	}
};
</script>

<style scoped>
</style>