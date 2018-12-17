<template lang="pug">
.quote-step
	h1 {{ title }}
	p {{ desc }}
</template>

<script>
export default {
	name: "QuoteStep",
	props: ["title", "desc"],
	components: {},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>

<style lang="sass" scoped>

</style>