<template>
	<div class="list-wrapper">
		<div v-if="hasTitle" class="titles">
			<h4 v-if="title" class="title">{{ title }}</h4>
			<h6 v-if="subtitle" class="subtitle">{{ subtitle }}</h6>
		</div>
		<ul class="list text-left">
			<list-item v-for="(item, index) in items" :item="item" :key="index"/>
		</ul>
	</div>
</template>

<script>
import listItem from "%/List/ListItem";
export default {
	props: {
		items: Array,
		hidden: { type: Boolean, default: false },
		title: { type: String, required: false },
		subtitle: { type: String, required: false }
	},
	components: {
		"list-item": listItem
	},
	methods: {
		hasTitle() {
			if (this.title | this.subtitle) {
				return true;
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "sassy";

	.list {
		margin: 0 0.25em;
		color: grey;
		line-height: 1.25;
		font-size: 0.85em;
		margin-bottom: 0.5em;
	}
	.toggle {
		margin: 0 1em;
		border-top: 3px dotted $light-dark;
		color: $light-darker;
		text-decoration: underline;
	}
	.arrow {
		text-align: center;
	}
</style>