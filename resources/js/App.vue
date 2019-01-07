<template>
	<div>
		<Navbar :pages="pages"></Navbar>
		<router-view></router-view>
	</div>
</template>

<script>
import Navbar from "@/js/components/Navbar/Navbar";
export default {
	name: "App",
	components: { Navbar },
	data() {
		return {
			pages: [
				{
					path: "/",
					name: "Home"
				},
				{
					path: "/about",
					name: "About"
				},
				{
					path: "/products",
					name: "Products"
				}
			]
		};
	}
};
</script>

<style scoped>
</style>