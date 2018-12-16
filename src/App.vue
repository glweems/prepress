<template lang="pug">
#app
	Nav(:pages="pages")
	router-view(:products="products")
	
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
			products: [
				{
					id: 0,
					title: "T-Shirts",
					img: require("@/assets/img/categories/category-tshirts.jpg"),
					styles: [
						{
							id: 0,
							title: "Shortsleeve",
							img: require("@/assets/img/t-shirts/shortsleeve-t-shirts.jpg"),
							items: [
								{
									index: 0,
									sku: "G500",
									img: require("@/assets/img/shirts/G500/g500_tbn.jpg"),
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
											title: "Ash",
											abr: "ash",
											hex: "#c1c1c1",
											path: require("@/assets/img/shirts/G500/g500_ash.jpg")
										},
										{
											title: "Black",
											abr: "blk",
											hex: "#191919",
											path: require("@/assets/img/shirts/G500/g500_blk.jpg")
										},
										{
											title: "Light Pink",
											abr: "lpnk",
											hex: "#eebfc5",
											path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
										},
										{
											title: "Gravel",
											abr: "grv",
											hex: "#767070",
											path: require("@/assets/img/shirts/G500/g500_grv.jpg")
										}
									]
								},
								{
									index: 1,
									sku: "C3001",
									img: require("@/assets/img/shirts/3001c/3001c_tbn.jpg"),
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
											title: "Black",
											abr: "blk",
											hex: "#fff",
											path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
										},
										{
											title: "Leaf",
											abr: "lef",
											hex: "#298c30",
											path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
										},
										{
											title: "Navy",
											abr: "nvy",
											hex: "#13164d",
											path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
										},
										{
											title: "Red",
											abr: "red",
											hex: "#ae2324",
											path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
										}
									]
								},
								{
									index: 2,
									sku: "980",
									brand: "Anvil",
									img: require("@/assets/img/shirts/980/980_tbn.jpg"),
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
											title: "Black",
											abr: "blk",
											hex: "black",
											path: require("@/assets/img/shirts/980/980_blk.jpg")
										},
										{
											title: "Spring Yellow",
											abr: "spyl",
											hex: "#d0c778",
											path: require("@/assets/img/shirts/980/980_spyl.jpg")
										},
										{
											title: "Navy",
											abr: "nvy",
											hex: "#11113e",
											path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
										},
										{
											title: "Red",
											abr: "red",
											hex: "#aa1d3b",
											path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
										}
									]
								},
								{
									index: 3,
									sku: "C1717",
									img: require("@/assets/img/shirts/C1717/C1717_tbn.jpg"),
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
											title: "White",
											abr: "wht",
											hex: "#ffffff",
											path: require("@/assets/img/shirts/C1717/C1717_wht.jpg")
										},
										{
											title: "Demin",
											abr: "den",
											hex: "#38373F",
											path: require("@/assets/img/shirts/C1717/C1717_den.jpg")
										},
										{
											title: "Brick",
											abr: "brk",
											hex: "#6A2C2F",
											path: require("@/assets/img/shirts/C1717/C1717_brk.jpg")
										}
									]
								}
							]
						},
						{
							id: 0,
							title: "Longsleeve",
							img: require("@/assets/img/t-shirts/longsleeve-t-shirts.jpg"),
							items: [
								{
									index: 3,
									sku: "C1717",
									img: "",
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
											title: "White",
											abr: "wht",
											hex: "#ffffff",
											path: require("@/assets/img/shirts/C1717/C1717_wht.jpg")
										},
										{
											title: "Demin",
											abr: "den",
											hex: "#38373F",
											path: require("@/assets/img/shirts/C1717/C1717_den.jpg")
										},
										{
											title: "Brick",
											abr: "brk",
											hex: "#6A2C2F",
											path: require("@/assets/img/shirts/C1717/C1717_brk.jpg")
										}
									]
								}
							]
						},
						{
							id: 0,
							title: "Tank-Tops",
							img: require("@/assets/img/t-shirts/tank-tops.jpg")
						},
						{
							id: 0,
							title: "Performance",
							img: require("@/assets/img/t-shirts/longsleeve-t-shirts.jpg")
						}
					]
				},
				{
					id: 1,
					title: "Sweatshirts",
					img: require("@/assets/img/categories/category-sweatshirts.jpg")
				},
				{
					id: 2,
					title: "Polos",
					img: require("@/assets/img/categories/category-polos.jpg")
				}
			]
		};
	},
	computed: {
		categories() {
			let categories = [];
			var i;
			for (i = 0; i < this.products.length; i++) {
				categories.push(this.products[i]);
			}
			return categories;
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
