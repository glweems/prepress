<template>
	<div>
		<gw-header :title="header.title" :subtitle="header.subtitle" :msg="header.msg"></gw-header>
	</div>
</template>

<script>
import header from "%/Header/Header";
export default {
	components: {
		"gw-header": header
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