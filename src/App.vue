<template lang="pug">
#app
	Nav(:pages="pages")
	router-view(:items="items")
		
</template>

<script>
import Layout from "@/components/Layout";
import Nav from "@/components/Nav";
export default {
	name: "App",
	components: {
		Layout,
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
			]
		};
	}
};
</script>

<style lang="sass">
@import "@/sass/main.sass"

html
	background: $light
	
#layout
	margin: 1em

input
  &[type="color"], &[type="date"], &[type="datetime"], &[type="datetime-local"], &[type="email"], &[type="month"], &[type="number"], &[type="password"], &[type="search"], &[type="tel"], &[type="text"], &[type="time"], &[type="url"], &[type="week"]
    font-size: 16px

select:focus, textarea
  font-size: 16px

</style>