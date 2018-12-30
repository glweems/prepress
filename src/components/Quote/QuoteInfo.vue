<template lang="pug">
.quote-info
	h1 Review your quote
	
	p Quantity - {{ job.qty }}
	
	p Locations - {{ locations }}
	
	p Price per shirt - {{ curr(job.pricePer) }}
	
	p Subtotal - {{ curr(job.subTotal) }}
	
	p Tax - {{ curr(job.tax) }}
	
	p Total - {{ curr(job.total) }}
</template>
	
<script>
export default {
	name: "QuoteInfo",
	components: {},
	data() {
		return {};
	},
	methods: {
		curr(value) {
			return "$" + value;
		}
	},
	computed: {
		locations() {
			let value = "Front";
			if (this.job.backPrice !== undefined) {
				value = "Front, Back";
			}
			return value;
		},
		job() {
			if (this.$route.params.job) {
				return this.$route.params.job;
			}
		}
	}
};
</script>
	
<style lang="sass" scoped>
@import '@/sass/main.sass'

.quote-info
	background: $primary 
</style>