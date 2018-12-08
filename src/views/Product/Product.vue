<template lang="pug">
.product
	//- Single Product View
	template(v-if="view('product')")
		.single
				.card
					//- header.card-header
						p.card-header-title {{ item.title }}
					.card-content
						p.title {{item.title}}
						p.subtitle.is-4 {{ item.brand }}
						.card-image
							figure.image
								img#item-img(:src="color.path")
						.media-content
							Swatches(:item="item")
						.content
							.features
								ul 
									template(v-for="(feature, index) in item.features")
										li {{ feature }}
					footer.card-footer
						router-link.card-footer-item(:to="getQuote()") Get Quote
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


	//- Calculator Product View
	template(v-if="view('quoteId')")
		.card
			.card-content
				.media
					.media-left
						figure.image.is-64x64
							img(:src="color.path")
					.media-content
						p.title.is-5 {{item.title}}
						p.subtitle.is-6 {{ item.brand }}
				.content
					|	Color: {{ color.name }}
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
    },
    getQuote() {
      var obj = {
        path: "/quote/id/" + this.item.id,
        params: {
          id: this.item.id
        },
        query: {
          color: this.color.abr
        }
      };
      return obj;
    }
  }
};
</script>

<style lang="sass" scoped>
v-carousel
	max-width: 50%
.product
	margin: .5em 0

.single
	img
		padding: 1.25em

.features
	text-align: left
</style>
