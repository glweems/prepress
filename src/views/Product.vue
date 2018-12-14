<template lang="pug">
.product
	product(:items="items")
</template>

<script>
import Product from "@/components/Product"
	export default {
		name: "Product", 
		props: ["items"],
		components: {
			"product": Product
		}
	}
</script>

<style lang="sass" scoped>

</style>