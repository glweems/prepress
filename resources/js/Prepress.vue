<template>
	<div>
		<navbar :pages="pages"></navbar>
		<main>
			<router-view></router-view>
		</main>
		<!-- <gw-footer :msg="footer.msg"></gw-footer> -->
	</div>
</template>

<script>
import nav from "%/Nav/Nav";
import footer from "%/Footer/Footer";
import navbar from "%/Navbar/Navbar";
export default {
	name: "pre-press",
	components: { navbar, "gw-footer": footer, "gw-nav": nav },
	data() {
		return {
			pages: [
				{
					path: "/",
					title: "Home"
				},
				{
					path: "/about",
					title: "About"
				},
				{
					path: "/products",
					title: "Products"
				}
			],
			footer: {
				msg: "This is the Footer Component!"
			}
		};
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	main {
		height: 100vh;
	}
</style>