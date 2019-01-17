<template>
	<div>
		<gw-header :title="header.title" :subtitle="header.subtitle" :msg="header.msg"></gw-header>
	</div>
</template>

<script>
export default {
	components: {
		"gw-header": () =>
			import(/* webpackChunkName: "page-header" */ "%/Header/Header")
	},
	data() {
		return {
			header: {
				title: "About page!",
				subtitle: "Prepress",
				msg:
					"We are a family owned screen printing companay based in Denton, TX."
			}
		};
	}
};
</script>

<style scoped>
</style>