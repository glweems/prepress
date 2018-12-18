<template lang="pug">
.features
	ul(v-if="preview")
		li(v-for="(item, index) in items") {{ item }}  
</template>
	
<script>
export default {
	name: "Features",
	props: ["items"],
	components: {},
	data() {
		return {
			preview: true
		};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
.features
	ul
		text-align: left
		list-style-type: none
	li
		padding-right: 3em
		font-weight: 300
		font-size: 14px
</style>