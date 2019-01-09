<template>
	<div>
		<navbar :pages="pages"></navbar>
		<router-view></router-view>
	</div>
</template>

<script>
import navbar from "%/Navbar/Navbar";
export default {
	name: "pre-press",
	components: { navbar },
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