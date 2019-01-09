<template>
	<ul class="items">
		<list-item v-for="(item, index) in items" :item="item" :key="index"></list-item>
	</ul>
</template>

<script>
import listItem from "%/List/ListItem";
export default {
	props: {
		items: Array
	},
	components: {
		"list-item": listItem
	}
};
</script>

<style scoped>
</style>