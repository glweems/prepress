<template lang="pug">

.wrapper

	//- Current Item
	article.media.card
			figure.media-left
				p.image.is-64x64
					img(:src="color.path", alt="item.tbn")
			.media-content
				.content
					p
						strong {{	item.title	}}
						br
						small {{	item.brand}}
						br
						small {{	color.name }}

			//- button.delete

	.calculator

		.step.qty
			.field
				label.label Total Quantity
				.control
					input.input(v-model="job.qty", type='text', pattern="[0-9]*")
					p {{ job.qty }}

		.step.locations
			strong.step-info Number of sides being printed
			
		.field
			div(v-for="(location, index) in job.locations")

				.control
					input.is-small(v-on:click="printedSides(index)" type="checkbox" v-model="location.selected") 
					label.label(:for="location") {{ location.name }}

				template(v-if="location.selected == true")
					.select
						select
							template(v-for="color in printing.colors")
								option {{ color }}
</template>

<script>
export default {
  name: "calculator",
  props: ["id", "color"],
  data() {
    return {
      job: {
        qty: "",
        locations: [
          {
            name: "Front",
            selected: false
          },
          {
            name: "Back",
            selected: false
          },
          {
            name: "Left",
            selected: false
          },
          {
            name: "Back",
            selected: false
          }
        ]
      },
      printing: {
        colors: [1, 2, 3, 4]
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
              id: 1,
              name: "Ash",
              abr: "ash",
              hex: "#c1c1c1",
              path: require("@/assets/img/shirts/G500/g500_ash.jpg")
            },
            {
              id: 2,
              name: "Black",
              abr: "blk",
              hex: "#191919",
              path: require("@/assets/img/shirts/G500/g500_blk.jpg")
            },
            {
              id: 3,
              name: "Light Pink",
              abr: "lpnk",
              hex: "#eebfc5",
              path: require("@/assets/img/shirts/G500/g500_lpnk.jpg")
            },
            {
              id: 4,
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
              id: 1,
              name: "Black",
              abr: "blk",
              hex: "#fff",
              path: require("@/assets/img/shirts/3001c/3001c_blk.jpg")
            },
            {
              id: 2,
              name: "Leaf",
              abr: "lef",
              hex: "#298c30",
              path: require("@/assets/img/shirts/3001c/3001c_lef.jpg")
            },
            {
              id: 3,
              name: "Navy",
              abr: "nvy",
              hex: "#13164d",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              id: 4,
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
              id: 1,
              name: "Black",
              abr: "blk",
              hex: "black",
              path: require("@/assets/img/shirts/980/980_blk.jpg")
            },
            {
              id: 2,
              name: "Spring Yello",
              abr: "spyl",
              hex: "#d0c778",
              path: require("@/assets/img/shirts/980/980_spyl.jpg")
            },
            {
              id: 3,
              name: "Navy",
              abr: "nvy",
              hex: "#11113e",
              path: require("@/assets/img/shirts/3001c/3001c_nvy.jpg")
            },
            {
              id: 4,
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
    // this.id = this.$route.params.id;
    // this.color = this.$route.params.color;
    // this.item = this.items[this.index];
    // if (this.color == undefined) {
    // 	let defaultColor = 0;
    // 	this.color = this.item.color[defaultColor];
    // }
  },
  computed: {
    item: function() {
      let ida = this.$route.params.id;
      let item = this.items.find(item => item.id == ida);
      return item;
    },
    colorObj: function() {
      let x = this.$route.params.color;
      let color = this.item.colors.find(color => color.abr == x);
      return color;
    }
  },
  watch: {}
};
</script>

<style lang="sass" scoped>

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

