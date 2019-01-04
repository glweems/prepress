<template lang="pug">
.quote-info

	#big-price
		h1#price {{ curr(job.pricePer) }}
		h4#per-shirt (Per Shirt)
	
	.card
		.card-header
			h1 Job Info
		.card-body
			p Quantity
				span {{ job.qty }}
			
			p Subtotal
				span {{ curr(subTotal) }}
			
			p Tax
				span {{ curr(tax) }}
			
			p Total
				span {{ curr(total) }}
				
</template>
	
<script>
export default {
	name: "Calculator",
	data() {
		return {
			colors: [1, 2, 3, 4],
			breaks: [12, 24, 36, 100],
			matrix: [
				[10, 9, 8, 7],
				[10.75, 9.5, 8.25, 7.25],
				[11.5, 10.75, 9, 7.5],
				[14.25, 12.5, 9.5, 8]
			],
			secondLocation: [1.25, 1.5, 1.75, 2]
		};
	},

	methods: {
		curr(value) {
			return "$" + value;
		},
		colorArr(colors) {
			if (colors != 0) {
				return colors - 1;
			}
		}
	},
	computed: {
		qty() {
			return Number(this.$route.params.qty);
		},
		front() {
			return Number(this.$route.params.front);
		},
		back() {
			return Number(this.$route.params.back);
		},
		qtyArr() {
			// Get array value for matrix qty
			var value = 0;
			var result;
			var i;
			for (i = 0; i < this.breaks.length; i++) {
				// takes qty and finds pricebreak
				if (this.qty >= this.breaks[i]) {
					value = this.breaks[i];
				}
			} // Match result to pricebreaks && return index
			result = this.breaks.indexOf(value);
			if (result < 0) {
				result = undefined;
			}
			return result;
		},
		colorArrs() {
			// Creates object of color array index
			let obj = {};
			let front = this.front;
			let back = this.back;
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
			return this.matrix[this.qtyArr][this.colorArrs.front];
		},
		backPrice() {
			// If yes find how many and what cost is
			return this.secondLocation[this.colorArrs.back];
		},
		pricePer() {
			if (this.backPrice) {
				return this.basePrice + this.backPrice;
			} else {
				return this.basePrice;
			}
		},
		subTotal() {
			return this.qty * this.pricePer;
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
			let locations = {
				front: this.front,
				back: this.back
			};
			let obj = {
				qty: this.qty,
				locations: locations,
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

.quote-info
	// background: $primary 
	
#big-price
	text-align: center
	
	#price
		font-weight: 900
		color: $primary
		font-size: 8vh
		padding: none
		
	#per-shirt
		margin-top: -1em
		font-size: 2vh
</style>