<template lang="pug">
.products
	template(v-for="item in items")

		Product(:items="items", :item="item")

			span(slot="title")
				p.card-header-title {{ item.title }}

			span(slot="brand") 
				p.subtitle.is-6 {{ item.brand }}

			span(slot="fabric")
				p
					small {{ item.fabric }}
			span(slot="swatches")
				swatches(:item="item")

			span(slot="img") 
				img(:id="item.id", :src="img(item)")

			span(slot="link") 
				router-link(:to="toProduct(item.id)") Details
</template>

<script>
import Product from "@/views/Product/Product";
import Swatches from "@/views/Product/Swatches";
export default {
  name: "List",
  props: ["items"],
  components: { Product, Swatches },
  data() {
    return {};
  },
  computed: {},
  methods: {
    toProduct(id) {
      var obj = {
        path: "/products/id/" + id,
        params: {
          id: id
        }
      };
      return obj;
    },
    img(item) {
      return item.colors[0].path;
    }
  }
};
</script>

<style lang="sass" scoped>

</style>
