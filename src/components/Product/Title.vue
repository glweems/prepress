<template lang="pug">
.banner-info
	h1.product-title {{ item.title }}
		span.icons
			i.fas.fa-dollar-sign(v-for="index in icon(item.upgrade)")
	h3.brand {{ item.brand }}		
</template>
	
<script>
export default {
	name: "BannerInfo",
	props: ["item"],
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

.banner-info
	padding-top: .7em 
		
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