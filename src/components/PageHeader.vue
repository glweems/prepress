<template lang="pug">
.page-header
	.titles
		p.title {{ title }}
		p.subtitle {{ subtitle }}
	.msg(v-if="msg")
		p.msg {{ msg }}
	
	
	
</template>

<script>
export default {
	name: "PageHeader",
	props: {
		title: {
			type: String,
			required: true,
			default: "Title"
		},
		subtitle: {
			type: String,
			required: false
		},
		msg: {
			type: String,
			required: false
		}
	},
	components: {}
};
</script>

<style lang="sass" scoped>

@import "@/sass/main.sass"

.page-header
	text-align: center
	width: 100%
	
	.titles
		padding: .5em
		background: $primary
		margin-bottom: 1vh
		text-align: center
		
		.title
			color: $light
			font-weight: 800
			
		.subtitle	
			color: $alt
			font-weight: 500
	
		.msg
			color: $dark
			text-align: left
			padding: 0 5vw
		
</style>

