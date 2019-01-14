<template>
	<ul :class="list">
		<list-item v-for="(item, index) in items" :item="item" :key="index"></list-item>
	</ul>
</template>

<script>
export default {
	props: {
		items: Array,
		hidden: {
			type: Boolean,
			default: true
		}
	},
	components: {
		"list-item": () =>
			import(/* webpackChunkName: "list-item" */ "%/List/ListItem")
	},
	data() {
		return {
			list: ["list", "text-left"]
		};
	}
};
</script>

<style scoped>
	.list {
		margin: 0.5rem 1rem;
	}
</style>