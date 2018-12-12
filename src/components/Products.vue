<template lang="pug">
.products
	template(v-for="item in items")
		p-item(:item="item", :key="item.id")
	//- template(v-if="view('products')", v-for="item in items")
		.product-wrapper(@click="cardClick(item)")
			Product(:items="items", :item="item", :key="item.id")

				span(slot="title")
					p.card-header-title {{ item.title }}

				span(slot="brand") 
					p.subtitle.is-6 {{ item.brand }}

				span(slot="fabric")
					p
						small {{ item.fabric }}
				span(slot="swatches")
					swatches(:item="item")

				span(slot="img") 
					img(:id="item.id", :src="img(item)")
				
</template>

<script>
import Product from "@/views/Product/Product";
import Swatches from "@/views/Product/Swatches";
import ProductsItem from "@/components/ProductsItem";
export default {
	name: "Products",
	props: ["items"],
	components: { Product, Swatches, "p-item": ProductsItem },
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
		},
		cardClick(item) {
			var obj = {
				name: "product",
				query: {
					id: item.id
				}
			};
			this.$router.push(obj);
		}
	}
};
</script>

<style lang="sass" scoped></style>
