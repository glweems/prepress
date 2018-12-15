<template lang="pug">
#app
	Nav(:pages="pages")
	router-view(:items="items", :filters="filters", :categories="categories")
	
</template>



<script>
import Nav from "@/components/Nav";
export default {
	name: "App",
	components: {
		Nav
	},
	data() {
		return {
			pages: [
				{
					id: "Home",
					path: "/"
				},
				{
					id: "About",
					path: "/about"
				},
				{
					id: "Products",
					path: "/products"
				},
				{
					id: "Quote",
					path: "/calculator"
				}
			],
			filters: [
				{
					id: "Brand",
					data: ["Gildan", "Anvil", "Comfort Colors", "Bella + Canvas"]
				},
				{
					id: "Fabric",
					data: ["100% Cotton", "50% / 50%", "100% Polyester"]
				},
				{
					id: "Upgrade",
					data: [0, 1, 2, 3, 4]
				},
				{
					id: "Color",
					data: [1, 2, 3, 4, 5, 6]
				},
				{
					id: "Style",
					data: ["Short Sleeve", "Longsleeve", "V-Neck"]
				}
			],
			categories: [
				{
					title: "T-Shirts",
					img: require("@/assets/img/categories/category-tshirts.jpg")
				},
				{
					title: "Sweatshirts",
					img: require("@/assets/img/categories/category-sweatshirts.jpg")
				},
				{
					title: "Polos",
					img: require("@/assets/img/categories/category-polos.jpg")
				}
			],
			items: [
				{
					index: 0,
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
					index: 1,
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
					index: 2,
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
				},
				{
					index: 3,
					id: "C1717",
					brand: "Comfort Colors",
					title: "Adult Heavyweight RS T-Shirt",
					fabric: "100% Cotton",
					upgrade: 4,
					tbn: "",
					features: [
						"100% ringspun cotton",
						"preshrunk",
						"soft-washed",
						"garment-dyed fabric",
						"twill taped shoulder-to-shoulder",
						"set-in sleeves",
						"double-needle stitched sleeves and bottom hem",
						"1'' ribbed collar with double-needle topstitched neckline"
					],
					colors: [
						{
							name: "White",
							abr: "wht",
							hex: "#ffffff",
							path: require("@/assets/img/shirts/C1717/C1717_wht.jpg")
						},
						{
							name: "Demin",
							abr: "den",
							hex: "#38373F",
							path: require("@/assets/img/shirts/C1717/C1717_den.jpg")
						},
						{
							name: "Brick",
							abr: "brk",
							hex: "#6A2C2F",
							path: require("@/assets/img/shirts/C1717/C1717_brk.jpg")
						}
					]
				}
			]
		};
	},
	methods: {
		getPath(item) {
			return "item";
		}
	}
};
</script>

<style lang="sass">
@import "@/sass/main.sass"
@import url("https://use.typekit.net/scb7avt.css")

// html
// 	background: $light
	
// h1,h2,h3,h4,h5,h6, p, a
// 	font-family: brandon-grotesque, sans-serif
// 	font-weight: 400
// 	font-style: normal

// #layout
// 	margin: 1em

// input
// 	[type="color"], &[type="date"], &[type="datetime"], &[type="datetime-local"], &[type="email"], &[type="month"], &[type="number"], &[type="password"], &[type="search"], &[type="tel"], &[type="text"], &[type="time"], &[type="url"], &[type="week"]
// 	 font-size: 16px

// select:focus, textarea
//   font-size: 16px
</style>
