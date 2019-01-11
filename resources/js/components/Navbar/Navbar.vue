<template>
	<div class="navbar">
		<router-link v-for="page in pages" :to="page.path" :key="page.name">{{ page.name }}</router-link>
	</div>
</template>

<script>
import NavLink from "%/Navbar/NavLink";
export default {
	props: {
		pages: Array
	},
	components: { NavLink }
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.navbar {
		display: flex;
	}
</style>