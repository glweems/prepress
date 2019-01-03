<template lang="pug">

//- Form Start
el-form(label-position="top")

	//- Form Quantity Input
	el-form-item(label="Number of Shirts needed")
		p.warning-msg(v-if="!isReady") Minimum Qty 12
		el-input-number(v-model='form.qty')
		
	//- Location Checkboxes
	transition(name='sides-checkboxes' enter-active-class='animated fadeIn faster' leave-active-class='animated fadeOut faster')
	
		el-form-item(v-if="isReady" label="Select Sides")
			el-checkbox(v-model='form.checkedSides.front') Front
			el-checkbox(v-model='form.checkedSides.back') Back
		
	//- Font Colors Dropdown
	transition(name='font-sides' enter-active-class='animated fadeIn' leave-active-class='animated fadeOut')
	
		el-form-item(v-if="form.checkedSides.front", :label="form.locations[0].id")
			el-select(v-model='form.locations[0].colors' clearable placeholder='Number of Colors')
				el-option(v-for='(color, i) in screenprint.colors', :key='color', :label='color', :value='color')
			
	//- Back Colors Dropdown
	transition(name='back-sides' enter-active-class='animated fadeIn' leave-active-class='animated fadeOut')
	
		el-form-item(v-if="form.checkedSides.back", :label="form.locations[1].id")
			el-select(v-model='form.locations[1].colors' clearable placeholder='Number of Colors')
				el-option(v-for='(color, i) in screenprint.colors', :key='color', :label='color', :value='color')
				
	//- Button to see price		
	transition(name='submit' enter-active-class='animated fadeIn' leave-active-class='animated fadeOut')
		router-link.button.is-primary(v-if="total", :to="viewQuote()", key="quote-info") View Price
	
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
				checkedSides: {
					front: false,
					back: false
				},
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
		},
		viewQuote() {
			let link = 'quote/info/' + this.form.qty + '/' + this.basePrice + '/' + this.backPrice + '/' + this.pricePer + '/' + this.subTotal + '/' + this.tax + '/' + this.total;
			let obj = {
				path: link
				// params: {
				// 	qty: this.form.qty,
				// 	basePrice: this.basePrice,
				// 	backPrice: this.backPrice,
				// 	pricePer: this.pricePer,
				// 	subTotal: this.subTotal,
				// 	tax: this.tax,
				// 	total: this.total
				// }
			};
			return obj;
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
				if (this.screenprint.secondLocation[this.colorArrs.back] == undefined) {
					return 0 
				} else {
					return this.screenprint.secondLocation[this.colorArrs.back]
				}
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
		tax() {
			let tax = 0.07;
			// Rounds result to only 2 decimals
			return this.subTotal * tax;
		},
		total() {
			return this.subTotal + this.tax;
		},
		job() {
			let obj = {
				qty: this.form.qty,
				basePrice: this.basePrice,
				backPrice: this.backPrice,
				pricePer: this.pricePer,
				subTotal: this.subTotal,
				tax: this.tax,
				total: this.total
			};
			return obj;
		}
	}
};
</script>

<style lang="sass" scoped>
@import '@/sass/main.sass'
	
form
	text-align: center
	width: 100%
	height: 100%
	
button
	margin-top: 3em

.warning-msg
	font-weight: 300
	color: $alt
		
.el-select-dropdown__item
	padding-left: 1em
</style>
