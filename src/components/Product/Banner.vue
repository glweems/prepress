<template lang="pug">
.product-banner(:class="this.details")
	product-img(:img="color.path")
	banner-info(:item="item", :color='color') 
</template>
	
<script>
const ProductImg = () =>
	import(/* webpackChunkName: "product-img" */ "@/components/Product/Img");
const BannerInfo = () =>
	import(/* webpackChunkName: "banner-info" */ "@/components/Product/BannerInfo");
export default {
	name: "ProductBanner",
	props: ["item", "color"],
	components: {
		"product-img": ProductImg,
		"banner-info": BannerInfo
	},
	data() {
		return {
			style: {
				default: {}
			}
		};
	},
	methods: {},
	computed: {
		details() {
			if (this.$route.name !== "product-page-home") {
				return "left";
			} else {
				return "bottom";
			}
		}
	}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

	
.product-banner
	+product-img
	margin-bottom: 1em
	padding: .5em
   
.bottom
	text-align: center
	 
.left
	display: flex
	justify-content: start
	.banner-info
		margin-left: .75em
	
</style>