<template lang="pug">
.product
	//- Multi Product View
	template(v-if="view('all')")
		.card
			header.card-header
				slot(name="title")

			.card-content
				.media
					.media-left
						figure.image.is-96x96
							slot(name="img")
					.media-content
						slot(name="brand")
						slot(name="fabric")
						slot(name="swatches")
						slot(name="link")
						 
			//- 	.content
			//- 		//- | Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
			//- footer.card-footer
			//- 	p.card-footer-item
			//- 		span
			//- 			| View on
			//- 			a(href='https://twitter.com/codinghorror/status/506010907021828096') Twitter
			//- slot(name="link")
	//- Single Product View
	template(v-if="view('product')")
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
import Swatches from "@/views/Product/Swatches";
export default {
  name: "Product",
  props: ["items"],
  components: {
    Swatches
  },
  data() {
    return {};
  },
  computed: {
    route() {
      return this.$route.name;
    },
    id() {
      return this.$route.params.id;
    },
    item() {
      var id = this.id;
      var item = this.items.find(item => item.id == id);
      return item;
    },
    colorName() {
      let name = this.$route.query.color;
      if (name == undefined) {
        name = this.item.colors[0].abr;
      }
      return name;
    },
    color() {
      let color = this.item.colors.find(color => color.abr == this.colorName);
      return color;
    },
    img() {
      return this.color.path;
    }
  },
  methods: {
    view(name) {
      var route = this.route;
      if (route == name) {
        return true;
      }
    }
  }
  //   computed: {
  //     route() {
  //       let route = this.$route.name;
  //       return route;
  //     },
  //     item() {
  //       if ((this.route = "product")) {
  //         let id = this.id;
  //         let item = this.items.find(item => item.id == id);
  //       }
  //       return item;
  //     },
  //     colorAbr() {
  //       let colorAbr = this.$route.query.color;
  //       if (colorAbr == undefined) {
  //         colorAbr = this.item.colors[0].abr;
  //       }
  //       return colorAbr;
  //     },
  //     color() {
  //       let color = this.item.colors.find(color => color.abr == this.colorAbr);
  //       return color;
  //     },
  //     toPricing() {
  //       let item = this.item.id;
  //       let colorAbr = this.colorAbr;
  //       return "/quote/" + item + "?color=" + colorAbr;
  //     },
  //     view() {
  //       let route = this.$route.name;
  //       let view = false;
  //       if (route) {
  //         view = true;
  //       }
  //       return false;
  //     }
  //   },
  //   methods: {
  //     all() {
  //       if (this.route == "all") {
  //         return true;
  //       }
  //     },
  //     product() {
  //       if (this.route == "product") {
  //         return true;
  //       }
  //     }
  //   }
};
</script>

<style lang="sass" scoped>
.card
	margin: .5em 0
</style>
