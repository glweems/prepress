<template lang="pug">
.scroller
	slot
</template>
	
<script>
export default {
	name: "Scroller",
	data() {
		return {};
	}
};
</script>
	
<style lang="sass" scoped>
.scroller
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	padding: 0
	margin: 0
	&::-webkit-scrollbar
		display: none;
	div
		display: inline-flex
		margin: 0 0.25em
</style>