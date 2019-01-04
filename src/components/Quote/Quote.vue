<template lang="pug">
router-view(:screenprint="screenprint", :form="form")
</template>
	
<script>
export default {
	name: "Quote",
	props: [""],
	components: {},
	data() {
		return {
			form: {
				viewQuote: false,
				hasSizes: false,
				qty: 0,
				checkedSides: {
					front: false,
					back: false
				},
				sizes: [
					{
						id: "S",
						title: "Small",
						qty: 0
					},
					{
						id: "M",
						title: "Medium",
						qty: 0
					},
					{
						id: "L",
						title: "Large",
						qty: 0
					},
					{
						id: "XL",
						title: "Extra Large",
						qty: 0
					},
					{
						id: "2XL",
						title: "Double Extra Large",
						qty: 0
					}
				],
				locations: [
					{
						id: "Front",
						colors: 0
					},
					{
						id: "Back",
						colors: 0
					}
				]
			},
			screenprint: {
				colors: [1, 2, 3, 4],
				breaks: [12, 24, 36, 100],
				matrix: [
					[10, 9, 8, 7],
					[10.75, 9.5, 8.25, 7.25],
					[11.5, 10.75, 9, 7.5],
					[14.25, 12.5, 9.5, 8]
				],
				secondLocation: [1.25, 1.5, 1.75, 2]
			}
		};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

    
</style>