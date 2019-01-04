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
		router-link.button.is-primary(v-if="showBtn()", :to="viewQuote()" @click="setJob($event)") View Price
</template>
	
<script>
export default {
	name: "QuoteForm",
	props: ["screenprint", "form"],
	components: {},
	data() {
		return {};
	},
	methods: {
		colorArr(colors) {
			if (colors != 0) {
				return colors - 1;
			}
		},
		showBtn() {
			return true;
		},
		viewQuote() {
			let obj = {
				name: "quote-calculator",
				params: {
					qty: this.form.qty,
					front: this.form.locations[0].colors,
					back: this.form.locations[1].colors
				}
			};
			return obj;
		}
	},
	computed: {
		isReady() {
			let ready = false;
			if (this.form.qty >= 12) {
				ready = true;
			}
			return ready;
		},
		job() {
			let obj = {
				qty: this.form.qty,
				locations: [
					this.form.locations[0].colors,
					this.form.locations[1].colors
				]
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