<template lang="pug">
.browse
	template(v-for="item in items")
		p-item(:item="item", :key="item.id")
		
</template>

<script>
import ProductsItem from "@/components/ProductsItem";
import Swatches from "@/components/Swatches";
import Filter from "@/components/Filter";

export default {
	name: "Browse",
	props: ["items", "filters"],
	components: { "p-item": ProductsItem, Swatches, "p-filter": Filter },

	data() {
		return {};
	},

	computed: {
		route() {
			return this.$route.name;
		}
	},

	methods: {
		view(name) {
			var route = this.route;
			if (route == name) {
				return true;
			}
		},
		img(item) {
			return item.colors[0].path;
		}
	}
};
</script>

<style lang="sass" scoped>

</style>
