<template lang="pug">
.filter-bar-item
   p {{ id }}
</template>

<script>
export default {
	name: "FilterBarItem",
	props: {
		id: {
			type: String,
			required: true
		}
	},

	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
.filter-bar-item
	display: inline-flex
	padding: .3em
	margin: 0 .15em
	// background: lightgrey

	p
		padding: .2em .7em
		background: white
		border-radius: .3em
		color: coral
</style>