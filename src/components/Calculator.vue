<template lang="pug">

.wrapper

	//- Current Item
	article.media.card
			figure.media-left
				p.image.is-64x64
					img(:src="item.colors[colorIndex].path", alt="item.tbn")
			.media-content
				.content
					p
						strong {{	item.title	}}
						br
						small {{	item.brand}}
						br
						small {{	color.name }}
				//- nav.level.is-mobile
					.level-left
						a.level-item
							span.icon.is-small
								i(:style="{ color: color.hex }").fas.fa-circle

			button.delete

	.calculator

		.step.qty
			.field
				label.label Total Quantity
				.control
					input.input(v-model="job.qty", type='text', pattern="[0-9]*")
					p {{ job.qty }}

		.step.locations
			strong.step-info {{ printing.locations.info }}
			
		.field.is-grouped
			div(v-for="(location, index) in printing.locations.sides")

					p.control
						input.checkbox.muted(v-on:click="printedSides(index)" type="checkbox" v-model="job.locations[index]" placeholder="hi") 
						label(:for="location") {{ location.name }}
					//- p {{ printedSides(index) }}
					p {{ location.sides }}
					p {{ index }}
		p.subtitle Printed Locations 
		p.subtitle {{ job }}

</template>

<script>
export default {
  name: "calculator",
  props: ["index", "color", "colorIndex"],
  data() {
    return {
      checkedVals: ["bar"],
      printing: {
        locations: {
          info: "Printed Locations",
          sides: [
            {
              name: "front",
              selected: null
            },
            {
              name: "back",
              selected: null
            },
            {
              name: "left",
              selected: null
            },
            {
              name: "right",
              selected: null
            }
          ]
        }
      },
		item: Object,
		job: {
			qty: "",
			locations: []
		},
      pricing: {
        qty: Number,
        locations: Number,
        loadPath: "String"
      },
      items: [
        {
          id: "G500",
          brand: "Gildan",
          title: "Heavy Cotton T-Shirt",
          fabric: "100% Cotton",
          price: 1,
          tbn: require("@/assets/img/shirts/G500/g500_tbn.jpg"),
          features: [
            "6 oz. 100% pre-shrunk cotton; Ash, Sports Grey, Heather, Antique, and Safety colors are poly/cotton blends",
            "Ladies option is the Gildan Ultra Cotton Ladies T-shirt",
            "Sturdy heavyweight cotton",
            "Double-needle stitched for durability",
            "Huge color selection"
          ],
          colors: [
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
          tbn: require("@/assets/img/shirts/3001c/3001C_tbn.jpg"),
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
          tbn: require("../assets/img/shirts/980/980_tbn.jpg"),
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
              name: "Spring Yello",
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
  },
  methods: {
    loadPath: function() {},
  },
  watch: {

  }
};
</script>

<style lang="sass" scoped>

@import '~pretty-checkbox/src/pretty-checkbox.scss'

.wrapper
	margin: 0 3vw
	padding: 1vw

	article
		margin: 0 3vw
		padding: 1vh

.calculator
	margin: 1vw

.field
	.label
		text-align: left
	.help
		text-align: left
		margin-left: 1em

.control
	text-align: left
	margin: 1vw

.step
	margin: 6vh 0 2vh 0

.qty
	input
		max-width: 5em

.locations
	text-align: left

</style>
