<template lang="pug">
form.calculator
	template(v-if="!form.hasSizes")
		label(for="total-qty") Total Qty
		input.input(id="total-qty", type="number", v-model="form.qty")
	
	template(v-if="form.hasSizes", v-for="size in form.sizes")
		label(:for="size.id") {{ size.id }}
		input.input(:id="size.id", type="number")
		
	template(v-for="location in form.locations")
		label(:for="location.id") {{ location.id }}
		input.input(:id="location.id", type="number", v-model="location.colors")
		
	button.button(type="submit" disabled) Click me
	
	p(v-if="jobTotal") {{jobTotal}}
</template>

<script>
export default {
	name: "Calculator",
	props: ["product"],
	components: {},
	data() {
		return {
			screenprint: {
				colors: [1, 2, 3, 4],
				breaks: [12, 24, 36, 100],
				matrix: [
					[10, 9, 8, 7],
					[10.75, 9.5, 8.25, 7.25],
					[11.5, 10.75, 9, 7.5],
					[14.25, 12.5, 9.5, 8]
				],
				secondLocation: [1.25, 1.5, 1.75, 2]
			},
			form: {
				viewQuote: false,
				hasSizes: false,
				qty: 0,
				sizes: [
					{
						id: "S",
						title: "Small",
						qty: 0
					},
					{
						id: "M",
						title: "Medium",
						qty: 0
					},
					{
						id: "L",
						title: "Large",
						qty: 0
					},
					{
						id: "XL",
						title: "Extra Large",
						qty: 0
					},
					{
						id: "2XL",
						title: "Double Extra Large",
						qty: 0
					}
				],
				locations: [
					{
						id: "Front",
						colors: 0
					},
					{
						id: "Back",
						colors: 0
					}
				]
			}
		};
	},
	methods: {
		colorArr(colors) {
			if (colors != 0) {
				return colors - 1;
			}
		}
	},
	computed: {
		isReady() {
			let ready = false;
			if (this.form.qty >= this.screenprint.breaks[0]) {
				ready = true;
			}
			return ready;
		},
		qtyArr() {
			// Get array value for matrix qty
			var value = 0;
			var result;
			var i;
			for (i = 0; i < this.screenprint.breaks.length; i++) {
				// takes qty and finds pricebreak
				if (this.form.qty >= this.screenprint.breaks[i]) {
					value = this.screenprint.breaks[i];
				}
			} // Match result to pricebreaks && return index
			result = this.screenprint.breaks.indexOf(value);
			if (result < 0) {
				result = undefined;
			}
			return result;
		},
		colorArrs() {
			// Creates object of color array index
			let obj = {};
			let front = this.form.locations[0].colors;
			let back = this.form.locations[1].colors;
			if (front != 0) {
				obj.front = front - 1;
			}
			if (back != 0) {
				obj.back = back - 1;
			}
			return obj;
		},
		basePrice() {
			// Matches qtyArr & colorArr to matrix array
			if (this.isReady) {
				return this.screenprint.matrix[this.qtyArr][this.colorArrs.front];
			}
		},
		backPrice() {
			// If yes find how many and what cost is
			if (this.isReady) {
				return this.screenprint.secondLocation[this.colorArrs.back];
			}
		},
		pricePer() {
			if (this.backPrice) {
				return this.basePrice + this.backPrice;
			} else {
				return this.basePrice;
			}
		},
		subTotal() {
			return this.form.qty * this.pricePer;
		},
		jobTax() {
			let tax = 0.07;
			// Rounds result to only 2 decimals
			return this.subTotal * tax;
		},
		jobTotal() {
			return this.subTotal + this.jobTax;
		}
	}
};
</script>

<style lang="sass" scoped>
@import '@/sass/main.sass'
.calculator
	transition: 1s
form
	margin-right: 25%
	margin-left: 25%
	text-align: center
	max-width: 80%
	input
		margin: 1em 0
	button
		margin-top: 3em
</style>
