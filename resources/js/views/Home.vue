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
				title: "This is the Home page!",
				subtitle: "pre-press",
				msg: "Welcome to prepress.com."
			}
		};
	}
};
</script>

<style scoped>
</style>