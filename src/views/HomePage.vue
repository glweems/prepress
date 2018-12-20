<template lang="pug">
.home
	page-header(:title="title", :subtitle="subtitle", msg="This is a message")
	el-row(:gutter='12')
		el-col(:span='8')
			el-card(shadow='always') Always
		el-col(:span='8')
			el-card(shadow='hover') Hover
		el-col(:span='8')
			el-card(shadow='never') Never
</template>

<script>
const PageHeader = () =>
	import(/* webpackChunkName: "page-header" */ "@/components/PageHeader");

export default {
	name: "HomePage",
	props: ["categories"],
	components: {
		PageHeader
	},
	data() {
		return {
			title: "Home",
			subtitle: "This is a t-shirt pricing calculator"
		};
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
span
	color: $primary
</style>

