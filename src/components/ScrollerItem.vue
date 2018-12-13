<template lang="pug">
.scroller-item(:key="this.item.id")
   p.filter {{ item.id }}
	
	
</template>

<script>
import Scroller from "@/components/Scroller";
export default {
	name: "ScrollerItem",
	props: ["item"],
	components: {
		Scroller
	},
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
.filter-bar
	padding-left: 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	
.scroller-item
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
