<template lang="pug">
.filter-box
   p hi   
</template>

<script>
export default {
	name: "FilterBox",
	props: {
		filters: {
			type: Object,
			required: true
		}
	},
	data() {
		return {};
	}
};
</script>

<style lang="sass" scoped>

</style>