<template>
	<router-link :to="path"></router-link>
</template>

<script>
export default {
	name: "NavLink",
	props: ["name", "path"],
	data() {
		return {};
	}
};
</script>

<style scoped>
</style>