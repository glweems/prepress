<template lang="pug">
.banner-info
	transition(name='title' enter-active-class='animated fadeIn slow' leave-active-class='animated fadeOut')
		h1.product-title {{ item.title }}
			span.icons
				i.fas.fa-dollar-sign(v-for="index in icon(item.upgrade)")
	p.brand {{ item.brand }}
	p(v-if="details").brand {{ color.title }}
</template>
	
<script>
export default {
	name: "BannerInfo",
	props: ["item", "color"],
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
	computed: {
		details() {
			if (this.$route.name !== "product-page-home") {
				return true;
			} else {
				return false;
			}
		}
	}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

.banner-info
		
	.product-title
		padding: .25em 0
		font-size: 20px
		
	.icons
		margin-left: 1em
		i
			padding-right: .1em
			color: $primary 
</style>