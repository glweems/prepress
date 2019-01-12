<template>
	<ul class="items">
		<list-item v-for="(item, index) in items" :item="item" :key="index"></list-item>
	</ul>
</template>

<script>
export default {
	props: {
		items: Array
	},
	components: {
		"list-item": () =>
			import(/* webpackChunkName: "list-item" */ "%/List/ListItem")
	}
};
</script>

<style scoped>
</style>