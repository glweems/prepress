<template lang="pug">
.products
	template(v-if="view('all')")
		template(v-for="item in items")
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

	template(v-if="view('quoteAll')")
		template(v-for="item in items")
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
export default {
	name: "List",
	props: ["items"],
	components: { Product, Swatches },
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
				path: "/products/id/" + item.id,
				params: {
					id: item.id
				}
			};
			this.$router.push(obj);
		}
	}
};
items: [
	{
		id: "G500",
		brand: "Gildan",
		title: "Heavy Cotton T-Shirt",
		fabric: "100% Cotton",
		upgrade: 1,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Ash",
				abr: "ash",
				hex: "#c1c1c1",
				path: require("@/assets/img/shirts/G500/g500_ash.jpg")
			},
			{
				name: "Black",
				abr: "blk",
				hex: "#191919",
				path: require("@/assets/img/shirts/G500/g500_blk.jpg")
			},
			{
				name: "Light Pink",
				abr: "lpnk",
				hex: "#eebfc5",
				path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
			},
			{
				name: "Gravel",
				abr: "grv",
				hex: "#767070",
				path: require("@/assets/img/shirts/G500/g500_grv.jpg")
			}
		]
	},
	{
		id: "C3001",
		brand: "Bella + Canvas",
		title: "Ringspun Cotton T-Shirt",
		fabric: "100% Cotton",
		upgrade: 3,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Black",
				abr: "blk",
				hex: "#fff",
				path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
			},
			{
				name: "Leaf",
				abr: "lef",
				hex: "#298c30",
				path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
			},
			{
				name: "Navy",
				abr: "nvy",
				hex: "#13164d",
				path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
			},
			{
				name: "Red",
				abr: "red",
				hex: "#ae2324",
				path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
			}
		]
	},
	{
		id: "980",
		brand: "Anvil",
		title: "Lightweight T-Shirt",
		fabric: "100% Cotton",
		upgrade: 2,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Black",
				abr: "blk",
				hex: "black",
				path: require("@/assets/img/shirts/980/980_blk.jpg")
			},
			{
				name: "Spring Yellow",
				abr: "spyl",
				hex: "#d0c778",
				path: require("@/assets/img/shirts/980/980_spyl.jpg")
			},
			{
				name: "Navy",
				abr: "nvy",
				hex: "#11113e",
				path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
			},
			{
				name: "Red",
				abr: "red",
				hex: "#aa1d3b",
				path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
			}
		]
	}
];
</script>

<style lang="sass" scoped></style>


<script>
import Product from "@/views/Product/Product";
import Swatches from "@/views/Product/Swatches";
export default {
	name: "List",
	props: ["items"],
	components: { Product, Swatches },
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
				path: "/products/id/" + item.id,
				params: {
					id: item.id
				}
			};
			this.$router.push(obj);
		}
	}
};
items: [
	{
		id: "G500",
		brand: "Gildan",
		title: "Heavy Cotton T-Shirt",
		fabric: "100% Cotton",
		upgrade: 1,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Ash",
				abr: "ash",
				hex: "#c1c1c1",
				path: require("@/assets/img/shirts/G500/g500_ash.jpg")
			},
			{
				name: "Black",
				abr: "blk",
				hex: "#191919",
				path: require("@/assets/img/shirts/G500/g500_blk.jpg")
			},
			{
				name: "Light Pink",
				abr: "lpnk",
				hex: "#eebfc5",
				path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
			},
			{
				name: "Gravel",
				abr: "grv",
				hex: "#767070",
				path: require("@/assets/img/shirts/G500/g500_grv.jpg")
			}
		]
	},
	{
		id: "C3001",
		brand: "Bella + Canvas",
		title: "Ringspun Cotton T-Shirt",
		fabric: "100% Cotton",
		upgrade: 3,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Black",
				abr: "blk",
				hex: "#fff",
				path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
			},
			{
				name: "Leaf",
				abr: "lef",
				hex: "#298c30",
				path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
			},
			{
				name: "Navy",
				abr: "nvy",
				hex: "#13164d",
				path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
			},
			{
				name: "Red",
				abr: "red",
				hex: "#ae2324",
				path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
			}
		]
	},
	{
		id: "980",
		brand: "Anvil",
		title: "Lightweight T-Shirt",
		fabric: "100% Cotton",
		upgrade: 2,
		tbn: 0,
		features: [
			"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
			"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
			"Sturdy heavyweight cotton",
			"Double-needle stitched for durability",
			"Huge color selection"
		],
		colors: [
			{
				name: "Black",
				abr: "blk",
				hex: "black",
				path: require("@/assets/img/shirts/980/980_blk.jpg")
			},
			{
				name: "Spring Yellow",
				abr: "spyl",
				hex: "#d0c778",
				path: require("@/assets/img/shirts/980/980_spyl.jpg")
			},
			{
				name: "Navy",
				abr: "nvy",
				hex: "#11113e",
				path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
			},
			{
				name: "Red",
				abr: "red",
				hex: "#aa1d3b",
				path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
			}
		]
	}
];
</script>