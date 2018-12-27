<template lang="pug">
.quote-info
	h1 {{ jobInfo }}
</template>
	
<script>
export default {
	name: "QuoteInfo",
	props: ["jobInfo"],
	components: {},
	data() {
		return {};
	},
	methods: {},
	computed: {}
};
</script>
	
<style lang="sass" scoped>
.quote-info
    
</style>