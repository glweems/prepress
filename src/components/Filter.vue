<template :for="Filter" lang="pug">
.filters

	.filter-categories
		
		a.category(v-for="(filter, index) in filters", 
					@click="setFilter(index)") {{ filter.id }}
		a.hide(v-if="show" @click="hide()") Hide
	
	.filter-list-wrapper(v-if="show")
		.filters-bar
			a.category(
				v-for="(item, index) in active.data",
				:key="active.id",
				@click="addQuery(item)"
				) {{ item }}	
		
</template>

<script>
// import FilterBar from "@/components/FilterBar";
export default {
	name: "Filter",
	props: ["filters"],
	components: {
		// "filter-bar": FilterBar
	},

	data() {
		return {
			show: false,
			activeIndex: 0,
			test: "",
			test2: "",
			query: []
			// query: {
			// 	brand: [],
			// 	fabric: [],
			// 	upgrade: [],
			// 	color: [],
			// 	style: []
			// }
		};
	},
	methods: {
		pushTo() {},
		addQuery(key) {
			this.test = key;
			this.test2 = this.active.id;
		},
		setFilter(value) {
			this.show = true;
			this.activeIndex = value;
		},
		hide() {
			if (this.show != false) {
				this.show = false;
			}
		}
	},

	computed: {
		active() {
			let obj = {};
			obj.data = this.filters[this.activeIndex].data;
			obj.id = this.filters[this.activeIndex].id;
			return obj;
		},
		titles() {
			let arr = [];
			let i;
			for (i = 0; i < this.filters.length; i++) {
				arr[i] = this.filters[i].id;
			}
			return arr;
		}
	}
};
</script>

<style lang="sass" scoped>
@import "@/sass/main.sass"
.filters
	width: 100%

.filter-categories
	text-align: right
	display: flex
	padding-left: 1em
	overflow-x: scroll
	overflow-y: hidden
	-webkit-overflow-scrolling: touch
	white-space: nowrap
	a
		display: inline-flex
		padding: .3em
		margin: 0 .15em
		padding: .3em .7em
		border-radius: .2em

.category
	padding: .3em .7em
	border-radius: .2em
	font-size: 18px

.filter-list-wrapper
	width: 100%
	background: $primary


.filters-bar
	display: inline-flex
	padding: .3em
	margin: 0 .15em
	background: $primary


.filter-data
	background: $primary
</style>
