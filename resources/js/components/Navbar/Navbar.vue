<template>
	<div>
		<router-link v-for="page in pages" :to="page.path" :key="page.name">{{ page.name }}</router-link>
	</div>
</template>

<script>
import NavLink from "@/js/components/Navbar/NavLink";
export default {
	name: "Navbar",
	props: ["pages"],
	components: { NavLink },
	data() {
		return {};
	}
};
</script>

<style scoped>
</style>