<template lang="pug">
.calculator

	//- Product
	template
		Product(:items="this.$props.items", :key="item.id")

	//- Calculator Form
	el-form(ref='form', :model='form', labelPosition="top")

		//- Breakouts Switch
		el-form-item(label='Have Sizes?')
			el-switch(v-model='form.breakouts' @change="sizesSwitch()")

		.total-qty // Total Qty
			template(v-if="!form.breakouts")
				el-form-item(label='Quantity')
					el-input-number(v-model='form.qty', :min='0', :max='1000')

		//- Breakouts
		template(v-if="form.breakouts")
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

		//- Quote
		el-form-item
			el-button(type="success", :disabled="submit()" @click="viewQuote()") Get Quote
		.quote
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
			text: {},
			form: {
				viewQuote: false,
				breakouts: false,
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
			locations: [
				{
					id: "Front",
					colors: null
				},
				{ id: "Back", colors: null }
			],
			screenprint: {
				colors: [1, 2, 3, 4],
				breaks: [12, 24, 36, 100],
				matrix: [
					[10, 9, 8, 7],
					[10.75, 9.5, 8.25, 7.25],
					[11.5, 10.75, 9, 7.5],
					[14.25, 12.5, 9.5, 8]
				],
				location2: [1.25, 1.5, 1.75, 2]
			},
			id: this.$route.params.id,
			colorAbr: this.$route.query.color
		};
	},
	methods: {
		viewQuote() {
			this.form.viewQuote = true;
		},
		open() {
			this.$alert("This is a message", "Title", {
				confirmButtonText: "OK",
				callback: action => {
					this.$message({
						type: "info",
						message: `action: ${action}`
					});
				}
			});
		},
		sizesSwitch() {
			this.form.qty = 0;
			var i;
			for (i = 0; i < breaks.length; i++) {
				breaks[i].qty = 0;
			}
		},
		isEnough() {
			if (this.form.qty >= this.screenprint.breaks[0]) {
				return true;
			}
			if (this.totalQty >= this.screenprint.breaks[0]) {
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
		totalQty() {
			let total = 0;
			var i;
			for (i = 0; i < this.form.sizes.length; i++) {
				total += this.form.sizes[i].qty;
			}
			this.form.qty = total;
			return total;
		},
		item() {
			var id = this.id;
			var item = this.items.find(item => item.id == id);
			return item;
		},
		qtyArr() {
			var qty = this.form.qty;
			var breaks = this.screenprint.breaks;
			var value = 0;
			var i;
			for (i = 0; i < breaks.length; i++) {
				if (qty >= breaks[i]) {
					value = breaks[i];
				}
				var result = breaks.indexOf(value);
			}
			if (result < 0) {
				result = null;
			}
			var colors = this.form.locations[0].colors - 1;
			var matrix = this.screenprint.matrix;
			var price = matrix[colors][result];
			return price;
		}
	}
};
</script>

<style lang="sass" scoped>
.el-form
	text-align: center
	margin: 2vh 3vw

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
		width: 100%
</style>
