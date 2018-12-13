<template lang="pug">
.scroller
   template(v-if="items", v-for="item in items")
      scroller-item(:item="item")
      
   
</template>

<script>
import ScrollerItem from "@/components/ScrollerItem";
export default {
	name: "Scroller",
	props: ["items"],
	components: {
		"scroller-item": ScrollerItem
	},
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>
.scroller
	padding-left: 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	// background: lightpink
</style>
