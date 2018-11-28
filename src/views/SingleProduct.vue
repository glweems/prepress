<template lang="pug">

	.item
		h1.title {{ item.title }}
		img#item-img.card(:src="loadPath")
		.info

			.swatches
				swatch(v-for="(color, index) in item.colors",
						:key="index")
						.swatch.card(v-on:click="swatchImg(color, index)",
						:style="{ background: color.hex }",
						:img="color.path")

			h6.subtitle  {{ item.brand }}
			p {{ item.desc }}

			//- Features
			//- ul(v-for="(feature, index) in item.features")
			//- 	li  {{ feature }}

		//- Get Pricing
		section.hero.is-success
			.hero-body
				router-link( :to="{ name: 'calculator', params: {  id: index, color: color, colorAbr: colorAbr, colorIndex: colorIndex } }", :price="item.price", :key="item.id" ).title Get Pricing

</template>

<script>
export default {
  name: "SingleProduct",
  props: ["index"],
  data() {
    return {
      index: String,
      item: Object,
      color: {},
      colorAbr: "tbn",
      colorIndex: 0,
		loadPath: String,
		// Items
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
  created() {
    this.index = this.$route.params.id;
    this.item = this.items[this.index];
    let x = this.item.tbn;
    this.loadPath = this.item.colors[x].path;
  },
  methods: {
    swatchImg: function(color, which) {
      document.getElementById("item-img").src = color.path;

      this.color = color;

      this.colorAbr = color.abr;

      this.colorIndex = which;
    }
  }
};
</script>

<style lang="sass" scoped>


.item
	.title
		margin: 1em
	img
		max-width: 80%
		border-radius: 5px


.info
	padding: 1em 2em


swatch
	display: inline-block
	margin: 0 .25em
	.swatch
		height: 1.5em
		width: 1.5em
		background: blue
		border-radius: 5px


.footer
	position: absolute
	bottom: 0px
	margin-right: auto
	margin-left: auto
	left: 50%
	transform: translate(-50%, 0)

</style>