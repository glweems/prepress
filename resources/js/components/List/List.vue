<template>
	<div class="list-wrapper">
		<h4 v-if="title">{{ title }}</h4>
		<ul @click="toggle" class="list text-left">
			<list-item v-for="(item, index) in listItems" :item="item" :key="index"/>
			<!-- <list-item class="toggle" :item="list.text" @click="toggle()">{{ list.text }}</list-item> -->
			<div v-if="this.hidden" class="arrow" v-html="list.text">{{ list.text }}</div>
		</ul>
	</div>
</template>

<script>
export default {
	props: {
		items: Array,
		hidden: { type: Boolean, default: false },
		title: { type: String, required: false },
		show: { type: Number, default: 2 }
	},
	components: {
		"list-item": () =>
			import(/* webpackChunkName: "list-item" */ "%/List/ListItem")
	},
	created() {
		if (this.hidden) {
			this.list = {
				open: this.items,
				close: this.getShortList(),
				text: "Show More.."
			};
			this.open = false;
		}
	},
	data() {
		return {
			list: undefined,
			open: undefined
		};
	},
	methods: {
		shortListButton() {},
		getShortList() {
			const items = this.items;
			const msg = "See More..";
			let copy = items.slice(0, this.show);
			// copy.push(msg);
			return copy;
		},
		toggle() {
			this.open = !this.open;
		}
	},
	computed: {
		listItems() {
			if (!this.hidden) {
				return this.items;
			}
			if (this.hidden && this.open) {
				this.list.text = "<i class='fas fa-caret-up'></i>";
				return this.list.open;
			}
			if (this.hidden && !this.open) {
				this.list.text = "<i class='fas fa-caret-down'></i>";
				return this.list.close;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";
	.list {
		margin: 0.5rem 1rem;
	}
	.toggle {
		color: $alt;
		text-decoration: underline;
	}
	li.last-item {
		color: $primary;
	}
	.arrow {
		text-align: center;
	}
</style>