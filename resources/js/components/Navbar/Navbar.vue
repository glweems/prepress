<template>
	<div>
		<router-link v-for="page in pages" :to="page.path" :key="page.name">{{ page.name }}</router-link>
	</div>
</template>

<script>
import NavLink from "%/Navbar/NavLink";
export default {
	name: "navbar",
	props: {
		pages: Array
	},
	components: { NavLink }
};
</script>

<style scoped>
</style>