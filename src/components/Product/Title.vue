<template lang="pug">
.product-title
	h1.product-title {{ title }}
		span.icons
			i.fas.fa-dollar-sign(v-for="index in icon(upgrade)")
</template>
	
<script>
export default {
	name: "ProductTitle",
	props: ["title", "upgrade"],
	components: {},
	data() {
		return {};
	},
	methods: {
		icon(upgrade) {
			var arr = [];
			var i = 0;
			if (upgrade == 0) {
				upgrade = 1;
			}
			while (i < upgrade) {
				arr.push(i);
				i++;
			}
			return arr;
		}
	},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

.product-title
	padding-top: .7em 
	padding-left: 1em
		
	.product-title
		padding: .5em 0
		font-size: 20px
		margin-right: 1em
		
	.icons
		margin-left: 1em
		i
			padding-right: .1em
			color: $primary 
</style>