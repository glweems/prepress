<template lang="pug">
.styles
	style-item(v-for="(style, index) in styles", :item="styles[index]")
</template>

<script>
import Style from "@/components/Style";
export default {
	name: "Styles",
	props: ["products"],
	components: {
		"style-item": Style
	},
	data() {
		return {};
	},
	methods: {},
	computed: {
		styles() {
			var obj = {};
			var i;
			for (i = 0; i < this.products.length; i++) {
				if (this.products[i].title == this.$route.params.category) {
					obj = this.products[i];
				}
			}
			return obj.styles;
		}
	}
};
</script>

<style lang="sass" scoped>

</style>