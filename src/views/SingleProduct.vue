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
import swatches from "@/components/Swatches";
export default {
  name: "singleProduct",
  components: {
    swatches
  },
  data() {
    return {
      colorAbr: this.$route.query.color,
      id: this.$route.params.id,
      items: [
        {
          id: "G500",
          brand: "Gildan",
          title: "Heavy Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 1,
          tbn: 0,
          features: [
            "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
            "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
            "Sturdy heavyweight cotton",
            "Double-needle stitched for durability",
            "Huge color selection"
          ],
          colors: [
            {
              name: "White",
              abr: "wht",
              hex: "#ffffff",
              path: require("@/assets/img/shirts/G500/g500_wht.jpg")
            },
            {
              name: "Ash",
              abr: "ash",
              hex: "#c1c1c1",
              path: require("@/assets/img/shirts/G500/g500_ash.jpg")
            },
            {
              name: "Black",
              abr: "blk",
              hex: "#191919",
              path: require("@/assets/img/shirts/G500/g500_blk.jpg")
            },
            {
              name: "Light Pink",
              abr: "lpnk",
              hex: "#eebfc5",
              path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
            },
            {
              name: "Gravel",
              abr: "grv",
              hex: "#767070",
              path: require("@/assets/img/shirts/G500/g500_grv.jpg")
            }
          ]
        },
        {
          id: "C3001",
          brand: "Bella + Canvas",
          title: "Ringspun Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 3,
          tbn: 0,
          features: [
            "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
            "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
            "Sturdy heavyweight cotton",
            "Double-needle stitched for durability",
            "Huge color selection"
          ],
          colors: [
            {
              name: "Black",
              abr: "blk",
              hex: "#fff",
              path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
            },
            {
              name: "Leaf",
              abr: "lef",
              hex: "#298c30",
              path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
            },
            {
              name: "Navy",
              abr: "nvy",
              hex: "#13164d",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              name: "Red",
              abr: "red",
              hex: "#ae2324",
              path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
            }
          ]
        },
        {
          id: "980",
          brand: "Anvil",
          title: "Lightweight T-Shirt",
          fabric: "100% Cotton",
          price: 2,
          tbn: 0,
          features: [
            "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
            "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
            "Sturdy heavyweight cotton",
            "Double-needle stitched for durability",
            "Huge color selection"
          ],
          colors: [
            {
              name: "Black",
              abr: "blk",
              hex: "black",
              path: require("@/assets/img/shirts/980/980_blk.jpg")
            },
            {
              name: "Spring Yellow",
              abr: "spyl",
              hex: "#d0c778",
              path: require("@/assets/img/shirts/980/980_spyl.jpg")
            },
            {
              name: "Navy",
              abr: "nvy",
              hex: "#11113e",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              name: "Red",
              abr: "red",
              hex: "#aa1d3b",
              path: require("@/assets/img/shirts/3001c/3001c_red.jpg")
            }
          ]
        }
      ]
    };
  },
  methods: {},
  computed: {
    item() {
      let id = this.id;
      let item = this.items.find(item => item.id == id);
      return item;
    },
    color() {
      let color = this.item.colors.find(color => color.abr == this.colorAbr);
      return color;
    },
    toPricing() {
      let item = this.item.id;
      let colorAbr = this.colorAbr;
      return "/quote/" + item + "?color=" + colorAbr;
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>
.wrapper
	.title
		margin: 1em
	img
		max-width: 80%
		border-radius: 5px

.info
	width: 100%
	// padding: 1em 2em


.swatches
	width: 100%
	// background: pink

.swatch
	margin: 0 .25em
	display: inline-block
	height: 1.5em
	width: 1.5em
	background: blue
	border-radius: 5px
</style>
