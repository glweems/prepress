<template lang="pug">
.wrapper
	p.title.is-4 {{ item.title }}
	p.subtitle  {{ item.brand }}
	img#item-img.card(:src="color.path")

	.info
		swatches(:item="item")

		router-link.button.is-link(:to="{name: 'calculator', path: '/quote/' + item.id, query: {color: color.abr}}") Get Pricing
		//- Features
		ul(v-for="(feature, index) in item.features")
			li  {{ feature }}
</template>

<script>
export default {
  name: "product",
  props: ["item"],
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>

</style>
