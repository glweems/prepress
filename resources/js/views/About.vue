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
				title: "This is the About page!",
				subtitle: "prepress",
				msg:
					"We are a family owned screen printing companay based in Denton, TX."
			}
		};
	}
};
</script>

<style scoped>
</style>