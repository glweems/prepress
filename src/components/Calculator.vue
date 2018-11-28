<template lang="pug">
.calculator

	.step.qty
		.field
			label.label Total Quantity
			.control
				input.input(v-model="job.qty", type='text', pattern="[0-9]*")
				p {{ job.qty }}

	.step.locations
		strong.step-info Number of sides being printed
		.control
			template(v-for="(location, index) in job.locations")
				input.is-small(type="checkbox" v-model="location.selected") 
				label.label(:for="location.name") {{ location.name }}

					template(v-if="location.selected == true")
						.select
							select(v-model="location.colors")
								template(v-for="color in screenprint.colors")
									option(:value="color") {{ color }}

		//- button.delete
	//- .calculator

	//- 	.step.qty
	//- 		.field
	//- 			label.label Total Quantity
	//- 			.control
	//- 				input.input(v-model="job.qty", type='text', pattern="[0-9]*")
	//- 				p {{ job.qty }}

	//- 	.step.locations
	//- 		strong.step-info Number of sides being printed
			
	//- 	.field
	//- 		div(v-for="(location, index) in job.locations")

				.control
					input.is-small(v-on:click="printedSides(index)" type="checkbox" v-model="location.selected") 
					label.label(:for="location") {{ location.name }}

	//- 			template(v-if="location.selected == true")
	//- 				.select
	//- 					select
	//- 						template(v-for="color in printing.colors")
	//- 							option {{ color }}

</template>

<script>
import singleProduct from "@/views/SingleProduct"
export default {
	name: "calculator",
	components: {
		singleProduct
	},
	data() {
		return {
			colorAbr: this.$route.query.color,
			id: this.$route.params.id,
			job: {
				qty: null,
				locations: [
					{
						name: "front",
						selected: null,
						colors: null					
					},
					{
						name: "back",					
						selected: null,
						colors: null					
					},
				]
			},
			screenprint: {
				colors: [1,2,3,4],
				breaks: [12,24,36,100],
				matrix: [
					[10.00, 9.00, 8.00, 7.00],
					[10.75, 9.50, 8.25, 7.25],
					[11.50, 10.75, 9.00, 7.50],
					[14.25, 12.50, 9.50, 8.00]
				]
			},
			items: [{
					id: "G500",
					brand: "Gildan",
					title: "Heavy Cotton T-Shirt",
					fabric: "100% Cotton",
					price: 0,
					tbn: 0,
					features: [
						"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
						"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
						"Sturdy heavyweight cotton",
						"Double-needle stitched for durability",
						"Huge color selection"
					],
					colors: [{
							name: "White",
							abr: "wht",
							hex: "#ffffff",
							path: require("@/assets/img/shirts/G500/g500_wht.jpg")
						},
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
					price: 3,
					tbn: 2,
					features: [
						"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
						"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
						"Sturdy heavyweight cotton",
						"Double-needle stitched for durability",
						"Huge color selection"
					],
					colors: [{
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
					price: 1,
					tbn: 0,
					features: [
						"6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
						"Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
						"Sturdy heavyweight cotton",
						"Double-needle stitched for durability",
						"Huge color selection"
					],
					colors: [{
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
		}
	}
}
</script>

<style lang="sass" scoped>
.wrapper
	margin: 0 3vw
	padding: 1vw

	article
		margin: 0 3vw
		padding: 1vh

.calculator
	margin: 1vw

.field
	.label
		// text-align: left
	.help
		// text-align: left
		margin-left: 1em

.control
	// text-align: left
	margin: 1vw

.step
	margin: 6vh 0 2vh 0

.qty
	input
		// max-width: 5em

.locations
	// text-align: left
</style>
