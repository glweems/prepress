<template lang="pug">
#calculator
	
	//- Product
	.p-details(v-if="hasItem")
		p Product: 
			span
				h1 {{ item.title }} 
		
	.quote(v-if="form.viewQuote")
		el-card.box-card
			.clearfix(slot='header')
				span Job Details
				el-button(style='float: right; padding: 3px 0', type='text') Save Quote
				
			.text.item Product: {{ item.title }}
			.text.item Color:
				span(:style="{ color: color.hex }") {{ "   " + color.name }}
				
			.text.item(v-if="form.hasSizes" v-for="size in form.sizes")
			| {{size.id}} - {{size.qty}}
				
			.text.item(v-if="form.hasSizes") Total: {{ form.qty }}
			
			.text.item(v-if="!form.hasSizes") Qty: {{ form.qty }}
			.text.item Printed Colors Front: {{ form.locations[0].colors }}
			.text.item(v-if="form.locations[1].colors != 0") Printed Colors Back: {{ form.locations[1].colors }}
			.text.item Price per shirt: ${{ price.pricePer }}
			.text.item Subtotal: ${{ price.subtotal }}
			.text.item Tax: ${{ price.tax }}
			.text.item Total: ${{ price.total }}
			
		//- Calculator Form
			
		el-form.calculator(ref='form', :model='form', labelPosition="top")

			//- Breakouts Switch
			el-form-item(label='Have Sizes?')
				el-switch(v-model='form.hasSizes')
				
				//- Total Qty			
				.total-qty 
					el-form-item(v-if="!form.hasSizes", label='Quantity')
						el-input-number(v-model='form.qty', :min='0', :max='1000')

				//- Breakouts
				.scroller(v-if="form.hasSizes")
					.scroll-item(v-for="size in form.sizes")
						el-form-item(:label='size.title')
							el-input-number(v-model='size.qty', :min='0')

				//- Printed Colors
				el-form-item(label="Number of Printed Colors")
					el-form-item(v-for="location in form.locations", :label='location.id')
						el-select(v-model='location.colors', :placeholder='location.id', :key="location.id" clearable)
							el-option(v-for='color in screenprint.colors', :key='color', :label='color', :value='color')

			//- Quote Button
			el-form-item
				el-button(type="success", :disabled="submit()" @click="viewQuote()") Get Quote
			
			//- p {{this.isReady()}}
		//- Quote
		
				
				
						
</template>

<script>
// import List from "@/views/Product/List";
// import Product from "@/views/Product";
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
		dollar(value) {
			return;
		},
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
				this.addedQty >= this.screenprint.breaks[0]
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
			return this.$route.query.id;
		},
		colorAbr() {
			return this.$route.query.color;
		},
		hasItem() {
			if (this.id) {
				return true;
			} else {
				return false;
			}
		},
		color() {
			let color = this.item.colors.find(color => color.abr == this.colorAbr);
			return color;
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
// #calculator
// 	margin: 2vh 3vw

// .calculator
// 	text-align: center


	
// .el-input-number
// 	max-width: 11em
// 	display: flex
// 	text-align: center
// 	font-size: 50px

	
// .el-select
// 	max-width: 7em
// 	text-align: center

// .total-qty
// 	// .el-input-number
// 		// width: 100%
		
// .quote
// 	// text-align: left  
</style>
