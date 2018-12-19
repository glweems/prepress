<template lang="pug">
router-link.breadcrum(:to="path") {{ title }} 
</template>

<script>
export default {
	name: "Breadcrum",
	props: ["title", "path"],
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>