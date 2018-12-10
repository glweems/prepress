<template lang="pug">
#calculator

	//- Product
	template
		Product(:items="this.$props.items", :key="item.id")

	.calculator
		//- Calculator Form
		el-form(ref='form', :model='form', labelPosition="top")

			//- Breakouts Switch
			el-form-item(label='Have Sizes?')
				el-switch(v-model='form.hasSizes' @change="sizesSwitch()")
				
				//- Total Qty			
				.total-qty 
					template(v-if="!form.hasSizes")
						el-form-item(label='Quantity')
							el-input-number(v-model='form.qty', :min='0', :max='1000')

				//- Breakouts
				template(v-if="form.hasSizes")
					.scroller
						template(v-for="size in form.sizes")
							.scroll-item
								el-form-item(:label='size.title')
									el-input-number(v-model='size.qty', :min='0')

				//- Printed Colors
				.scroller
					el-form-item(label="Number of Printed Colors")
						template(v-for="location in form.locations")
							.scroll-item
								el-form-item(:label='location.id')
									el-select(v-model='location.colors', :placeholder='location.id', :key="location.id" clearable)
										el-option(v-for='color in screenprint.colors', :key='color', :label='color', :value='color')

			//- Quote Button
			el-form-item
				el-button(type="success", :disabled="submit()" @click="viewQuote()") Get Quote
			
			//- p {{this.isReady()}}
		//- Quote
	template(v-if="form.viewQuote")
		.quote
			el-card.box-card
				.clearfix(slot='header')
					span Card name
					el-button(style='float: right; padding: 3px 0', type='text') Operation button
				.text.item(v-for='o in 4', :key='o') {{'List item ' + o }}		
				
						
</template>

<script>
import List from "@/views/Product/List";
import Product from "@/views/Product/Product";
export default {
	name: "Calculator",
	props: ["items"],
	components: {
		List,
		Product
	},
	data() {
		return {
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
						colors: ""
					},
					{
						id: "Back",
						colors: ""
					}
				]
			},
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
			}
		};
	},
	methods: {
		viewQuote() {
			this.form.viewQuote = true;
		},
		sizesSwitch() {
			this.form.qty = 0;
			var i;
			for (i = 0; i < breaks.length; i++) {
				breaks[i].qty = 0;
			}
		},
		isEnough() {
			if (
				this.form.qty >= this.screenprint.breaks[0] ||
				this.totalQty >= this.screenprint.breaks[0]
			) {
				return true;
			}
		},
		submit() {
			if (!this.isEnough()) {
				return true;
			}
		},
		route() {
			return this.$route.name;
		}
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
		colorAbr() {
			return this.$route.query.color;
		},
		isReady() {
			var status = false;
			if (this.isEnough() && this.form.locations[0].colors > 0) {
				status = true;
			}
			return status;
		},
		addedQty() {
			if (!this.form.hasSizes) {
				return undefined;
			}
			let total = 0;
			var i;
			for (i = 0; i < this.form.sizes.length; i++) {
				total += this.form.sizes[i].qty;
			}
			this.form.qty = total;
			return total;
		},
		price() {
			// Function won't run till this.isReady = true
			if (!this.isReady) {
				return undefined;
			}

			var qty = this.form.qty;
			var breaks = this.screenprint.breaks;
			var front = this.form.locations[0].colors;
			var back = this.form.locations[1].colors;
			var upgrade = this.item.upgrade;
			var matrixTwo = this.screenprint.secondLocation;
			var matrix = this.screenprint.matrix;
			var tax = 0.07;
			var value = 0;
			var i;

			// Get array value for matrix qty
			function qtyArr() {
				var result;
				for (i = 0; i < breaks.length; i++) {
					// takes qty and finds pricebreak
					if (qty >= breaks[i]) {
						value = breaks[i];
					}
				} // Match result to pricebreaks && return index
				result = breaks.indexOf(value);
				if (result < 0) {
					result = undefined;
				}
				return result;
			}
			var qtyArr = qtyArr();

			// Finds matrix index of colors passed to funct
			function colorArr(colors) {
				if (colors != 0) {
					return colors - 1;
				}
			}
			var baseColorArr = colorArr(front);

			// Matches qtyArr & colorArr to matrix array
			function basePrice(arr, col) {
				return matrix[arr][col];
			}

			// Find if 2nd location has any printed colors
			function secondPrint(colors) {
				// If yes find how many and what cost is
				var arr;
				var value = 0;
				if (colors != 0) {
					arr = colorArr(colors);
					value = matrixTwo[arr];
				}
				return value;
			}
			var backPrintPrice = secondPrint(back);

			// Finds subtotal for single shirt
			function pricePer(base, back, upgrade) {
				return base + back + upgrade;
			}
			var pricePer = pricePer(
				basePrice(baseColorArr, qtyArr),
				secondPrint(back),
				this.item.upgrade
			);

			// Calculates job subtotal
			function subtotal(qty, pricePer) {
				return qty * pricePer;
			}
			var subtotal = subtotal(qty, pricePer);

			// Calculates TAX for subtotal
			function getTax(tax, subtotal) {
				var result = tax * subtotal;
				// Rounds result to only 2 decimals
				return +(Math.round(result + "e+2") + "e-2");
			}
			var tax = getTax(tax, subtotal);

			var obj = {
				base: basePrice(baseColorArr, qtyArr),
				secondPrint: secondPrint(back),
				upgrade: this.item.upgrade,
				pricePer: pricePer,
				subtotal: subtotal,
				tax: tax,
				total: subtotal + tax
			};
			return obj;
		},
		item() {
			var id = this.id;
			var item = this.items.find(item => item.id == id);
			return item;
		}
	}
};
</script>

<style lang="sass" scoped>
#calculator
	margin: 2vh 3vw

.calculator
	text-align: center

.scroller
	padding-left: 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap

.scroll-item
	display: inline-flex
	margin: 0 .25em
	.el-input-number
		max-width: 10em
		display: flex
	.el-select
		max-width: 7em

.total-qty
	.el-input-number
		// width: 100%
</style>
