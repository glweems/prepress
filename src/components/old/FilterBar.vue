<template lang="pug">
.filter-bar
	slot(name="items")
</template>

<script>
export default {
	name: "FilterBar",
	props: {
		filters: {
			type: Object,
			required: true
		}
	},

	data() {
		return {};
	},

	methods: {
		setActive(value) {
			this.active = value;
		}
	},

	computed: {}
};
</script>

<style lang="sass" scoped>
.filter-bar
	display: flex
	padding-left: 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap

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