<template lang="pug">

article.message
	.message-header
		p Hello World
		button.delete(aria-label='delete')
	.message-body
		| Lorem ipsum dolor sit amet, consectetur adipiscing elit.
		strong Pellentesque risus mi
		| , tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum
		a felis venenatis
		| efficitur. Aenean ac
		em eleifend lacus
		| , in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.

</template>

<script>
	export default {
		name: "HelloWorld", 
		props: [" "],
		data() {
			return {

			}
		}
	}
</script>

<style lang="sass" scoped>

</style>
